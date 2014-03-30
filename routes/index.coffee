fs = require('fs')
path = require('path')
ejs = require('ejs')
passport = require('passport')

bookmarkletjs = null

getBaseUrl = (req) ->
  baseUrl = "#{req.protocol}://#{req.host}"
  if (port = req.app.get('port')) isnt 80
    baseUrl = "#{baseUrl}:#{port}"
  baseUrl

exports.index = (req, res) ->
  res.render('index', title: "Collect it")

exports.signup = (req, res) ->
  res.render('signup')

exports.register = (req, res) ->
  username = email = req.body.email
  password = req.body.password
  req.app.kaiseki.createUser {username, email, password}, (error, response, user, success) ->
    # user.sessionToken
    res.redirect('/items')

exports.login = (req, res) ->
  res.render('login')

exports.bookmarklet = (req, res) ->
  baseUrl = getBaseUrl(req)
  res.set('Content-Type', 'application/javascript')

  if bookmarkletjs
    res.send(200, bookmarkletjs)
  else
    filePath = path.join(__dirname, '../public/javascripts/bookmarklet.js')
    fs.readFile filePath, (err, data) ->
      if err
        res.send(500)
      else
        bookmarkletjs = ejs.render(data.toString(), {baseUrl})
        res.send(200, bookmarkletjs)

exports.extras = (req, res) ->
  baseUrl = getBaseUrl(req)
  res.render('extras', bookmarkletUrl: "#{baseUrl}/bookmarklet")

exports.items = require('./items')
