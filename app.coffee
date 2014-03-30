express = require('express')
routes = require('./routes')
http = require('http')
path = require('path')
passport = require('passport')
PassportLocalStrategy = require('passport-local').Strategy

app = express()

app.configure ->

  # config
  app.config = require("./config/#{app.settings.env}")

  app.set('port', process.env.PORT or 3000)
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  # middleware
  # app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(express.methodOverride())
  app.use(express.cookieParser())
  app.use(express.bodyParser())
  app.use(express.session(secret: 'bankshot25'))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use (req, res, next) ->
    res.locals.authenticated = req.isAuthenticated()
    next()
  app.use(app.router)
  app.use(express.static(path.join(__dirname, 'public')))

# development only
app.configure 'development', ->
  app.use(express.errorHandler())

# database
Kaiseki = require('kaiseki')
kaiseki = app.kaiseki = new Kaiseki(app.config.PARSE_APP_ID, app.config.PARSE_REST_API_KEY)

# auth
passport.use new PassportLocalStrategy
    usernameField: 'email',
    passwordField: 'password'
  , (email, password, done) ->
    kaiseki.loginUser email, password, (error, response, user, success) ->
      done(error, user)

passport.serializeUser (user, done) ->
  done(null, user.objectId)

passport.deserializeUser (id, done) ->
  kaiseki.getUser id, (error, response, user, success) ->
    done(null, user)

authenticate = (req, res, next) ->
  if req.isAuthenticated() then next()
  else res.redirect('/')

# routes
app.get('/', routes.index)
app.get('/extras', routes.extras)
app.get('/bookmarklet', routes.bookmarklet)

app.get('/signup', routes.signup)
app.post('/signup', routes.register)
app.get('/login', routes.login)
app.post '/login', passport.authenticate('local', failureRedirect: '/login'), (req, res) ->
  res.redirect('/items')
app.get('/logout', routes.logout)

app.get('/items', authenticate, routes.items.index)
app.get('/items/new', authenticate, routes.items.new)
app.post('/items', authenticate, routes.items.create)

http.createServer(app).listen app.get('port'), ->
  console.log("Express server listening on port #{app.get('port')}")
