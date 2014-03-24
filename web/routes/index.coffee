exports.index = (req, res) ->
  res.render('index', title: "Collect it")

exports.bookmarklet = (req, res) ->
  host = "#{req.protocol}://#{req.host}"
  if (port = req.app.get('port')) isnt 80
    host = "#{host}:#{port}"

  res.render('bookmarklet', {host})

exports.popup = (req, res) ->
  item =
    title: req.query.title or "N/A"
    image: req.query.image or "http://placehold.it/400x300"
    price: req.query.price or "N/A"

  res.render('popup', {item})
