# Styles

css = """
#collect-wrap {
  position: static;
}
#collect-wrap .image-candidate {
  position: absolute;
  z-index: 0;
  cursor: pointer;
  border: 3px solid gray;
}
#collect-wrap .image-candidate:hover {
  border: 3px solid black;
}
"""

# Utility

u =
  addClass: (el, name) ->
    el.className += if el.className.length then " #{name}" else name
  removeClass: (el, name) ->
    el.className = el.className.replace(new RegExp("\\s*#{name}\\s*", 'g'), '')
  on: (el, eventName, callback) ->
    el.addEventListener(eventName, callback)
  off: (el, eventName, callback) ->
    el.removeEventListener(eventName, callback)
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
    @addCSS()
    @makeContainer()
    @highlightImages()

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

    u.on overlay, 'click', (e) -> do (image) ->
      console.log 'click', image

    @containerEl.appendChild(overlay)

  getPrice: ->
    console.log 'getting price'

new Collectible
