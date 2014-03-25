exports.index = (req, res) ->
  req.app.kaiseki.getObjects 'item', (err, response, items, success) ->
    res.render('items/index', {items})

exports.new = (req, res) ->
  item =
    title: req.query.title or "N/A"
    image: req.query.image or "http://placehold.it/400x300"
    price: req.query.price or "N/A"

  res.render('items/new', {item})

exports.create = (req, res) ->
  item =
    title: req.body.title or "N/A"
    image: req.body.image or "http://placehold.it/400x300"
    price: parseFloat(req.body.price) or 0

  req.app.kaiseki.createObject 'item', item, (err, response, body, success) ->
    res.redirect('/items')
