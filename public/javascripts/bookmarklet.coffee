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
  cursor: pointer;
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
    x = 0
    y = 0
    while el and el isnt document.body
      continue if isNaN(el.offsetLeft) or isNaN(el.offsetTop)
      x += (el.offsetLeft - el.scrollLeft + el.clientLeft)
      y += (el.offsetTop - el.scrollTop + el.clientTop)
      el = el.offsetParent
    {x, y}
  distance: (point1, point2) ->
    xSquared = Math.pow(point2.x - point1.x, 2)
    ySquared = Math.pow(point2.y - point1.y, 2)
    Math.sqrt(ySquared + xSquared)

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
      if image.offsetWidth < 110 or image.offsetHeight < 110
        continue

      if u.getOffset(image).y > 600
        continue

      @makeCollectible(image)

  makeCollectible: (image) ->
    overlayEl = document.createElement('div')
    u.addClass(overlayEl, 'image-candidate')

    {x, y} = u.getOffset(image)
    overlayEl.style.left = "#{x}px"
    overlayEl.style.top = "#{y}px"
    overlayEl.style.width = "#{image.offsetWidth}px"
    overlayEl.style.height = "#{image.offsetHeight}px"

    u.on overlayEl, 'click', (e) => do (image) =>
      @chooseImage(image)

    @containerEl.appendChild(overlayEl)

  chooseImage: (image) ->
    item =
      image: image.src
      title: document.title
      price: @getPrice(image)
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

  getPrice: (image) ->
    imageOffset = u.getOffset(image)
    imageCenterOffset =
      x: imageOffset.x + (image.offsetWidth / 2)
      y: imageOffset.y + (image.offsetHeight / 2)

    nodes = document.getElementsByTagName('*')
    prices = []

    for node in nodes

      if node.childNodes.length isnt 1
        continue

      if node.childNodes[0].nodeType isnt 3
        continue

      text = node.nodeValue or ''
      if not matches = text.match(/\$?[\d,\.]+/g)
        continue

      for match in matches
        match = parseFloat(match.replace(/[\$,]/g, ''))
        if match is +match # exlude NaNs
          distance = u.distance(imageCenterOffset, u.getOffset(node))
          prices.push({node, match, distance})

    prices.sort (price1, price2) -> price1.distance - price2.distance

    prices[0].match

  destroy: ->
    embedEl = document.getElementById('collect-embed')
    embedEl?.parentNode.removeChild(embedEl)
    @containerEl.parentNode.removeChild(@containerEl)

# Export global
collect = window.collect =
  initialize: -> @instance = new Collectible
  util: u

collect.initialize()
