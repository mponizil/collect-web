# Styles

css = """
#collect-wrap {
  position: static;
  font-size: 14px;
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
#collect-wrap .info {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  bottom: 10px;
  right: 10px;
}
#collect-wrap .info button {
  padding: 4px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid black;
}
#collect-wrap .info button#collect-destroy:hover {
  background-color: red;
}
"""

# Markup

infoTemplate = -> """
<h4>Collect</h4>
<button id='collect-destroy'>Remove</button>
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

  constructor: ->
    @makeContainer()
    @addCSS()
    @addInfo()
    @highlightImages()

  makeContainer: ->
    @containerEl = document.createElement('div')
    @containerEl.id = 'collect-wrap'
    document.getElementsByTagName('body')[0].appendChild(@containerEl)

  addCSS: ->
    @styleEl = document.createElement('style')
    @containerEl.appendChild(@styleEl)
    styleSheet = document.createTextNode(css)
    @styleEl.appendChild(styleSheet)

  addInfo: ->
    @infoEl = document.createElement('div')
    u.addClass(@infoEl, 'info')
    @infoEl.innerHTML = infoTemplate()
    @containerEl.appendChild(@infoEl)

    u.on document.getElementById('collect-destroy'), 'click', (e) =>
      @destroy()

  highlightImages: ->
    for image in document.querySelectorAll('img')
      if image.offsetWidth < 100 or image.offsetHeight < 100
        continue

      if u.getOffset(image).top > 600
        continue

      @makeCollectible(image)

  makeCollectible: (image) ->
    overlayEl = document.createElement('div')
    u.addClass(overlayEl, 'image-candidate')

    {left, top} = u.getOffset(image)
    overlayEl.style.left = "#{left}px"
    overlayEl.style.top = "#{top}px"
    overlayEl.style.width = "#{image.offsetWidth}px"
    overlayEl.style.height = "#{image.offsetHeight}px"

    u.on overlayEl, 'click', (e) => do (image) =>
      @chooseImage(image)

    @containerEl.appendChild(overlayEl)

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

  # [TODO] filter for most prominent number that's close to the image clicked.
  getPrice: ->
    html = document.body.parentNode.outerHTML
    matches = html.match(/\$?([,\d]+\.\d{2})/g)

    options = {}
    for match in matches
      match = match.replace(/[\$,]/g, '')
      options[match] ?= 0
      options[match] += 1

    price = 0
    max = 0
    for option, count of options
      if count > max
        max = count
        price = option

    price

  destroy: ->
    @containerEl.parentNode.removeChild(@containerEl)

# Export global
collect = window.collect = new Collectible
