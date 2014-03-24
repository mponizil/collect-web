exports.index = (req, res) ->
  res.render('index', title: "Collect it")

exports.bookmarklet = (req, res) ->
  host = "#{req.protocol}://#{req.host}"
  if (port = req.app.get('port')) isnt 80
    host = "#{host}:#{port}"

  res.render('bookmarklet', {host})
