# Styles

css = """
#collect-wrap {
  position: static;
}
#collect-wrap .image-candidate {
  position: absolute;
  z-index: 10000;
  cursor: pointer;
  border: 3px solid red;
}
#collect-wrap .image-candidate:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
"""

# Config

config =
  BASE_URL: '<%= baseUrl %>' or 'http://localhost:3000'

# Utility

u =

  # DOM manipulation
  addClass: (el, name) ->
    el.className += if el.className.length then " #{name}" else name
  removeClass: (el, name) ->
    el.className = el.className.replace(new RegExp("\\s*#{name}\\s*", 'g'), '')

  # Event listeners
  on: (el, eventName, callback) ->
    el.addEventListener(eventName, callback)
  off: (el, eventName, callback) ->
    el.removeEventListener(eventName, callback)

  # DOM computation
  getOffset: (el) ->
    left = 0
    top = 0
    while el and el isnt document.body
      continue if isNaN(el.offsetLeft) or isNaN(el.offsetTop)
      left += (el.offsetLeft - el.scrollLeft + el.clientLeft)
      top += (el.offsetTop - el.scrollTop + el.clientTop)
      el = el.offsetParent
    {left, top}

# Bookmarklet

class Collectible

  initialize: ->
    @addCSS()
    @makeContainer()
    @highlightImages()
    return this

  addCSS: ->
    styleElement = document.createElement('style')
    document.getElementsByTagName('head')[0].appendChild(styleElement)
    styleSheet = document.createTextNode(css)
    styleElement.appendChild(styleSheet)

  makeContainer: ->
    @containerEl = document.createElement('div')
    @containerEl.id = 'collect-wrap'
    document.getElementsByTagName('body')[0].appendChild(@containerEl)

  highlightImages: ->
    for image in document.querySelectorAll('img')
      if image.offsetWidth > 100 and image.offsetHeight > 100
        @makeCollectible(image)

  makeCollectible: (image) ->
    overlay = document.createElement('div')
    u.addClass(overlay, 'image-candidate')

    {left, top} = u.getOffset(image)
    overlay.style.left = "#{left}px"
    overlay.style.top = "#{top}px"
    overlay.style.width = "#{image.offsetWidth}px"
    overlay.style.height = "#{image.offsetHeight}px"

    u.on overlay, 'click', (e) => do (image) =>
      @chooseImage(image)

    @containerEl.appendChild(overlay)

  chooseImage: (image) ->
    item =
      image: image.src
      title: document.title
      price: @getPrice()
      hostname: location.hostname
      url: location.href

    popupParams =
      width: 600
      height: 415
      scrollbars: 'no'
      toolbar: 'no'
      location: 'no'
      directories: 'no'
      status: 'no'
      menubar: 'no'
      resizable: 'no'
    popupParams.left = window.screenLeft + (window.innerWidth - popupParams.width) * .5;
    popupParams.top = window.screenTop + (window.innerHeight - popupParams.height) * .4;

    e = encodeURIComponent
    queryString = ("#{key}=#{e(value)}" for key, value of item).join('&')
    url = "#{config.BASE_URL}/items/new?#{queryString}"
    popupParams = ("#{key}=#{value}" for key, value of popupParams).join(',')
    window.open(url, '_blank', popupParams)

  getPrice: ->
    html = document.body.parentNode.outerHTML
    matches = html.match(/\$(\d+\.\d{2})/g)

    options = {}
    for match in matches
      match = match.replace('$', '')
      options[match] ?= 0
      options[match] += 1

    price = 0
    max = 0
    for option, count of options
      if count > max
        max = count
        price = option

    price

(new Collectible).initialize()
