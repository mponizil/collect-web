express = require('express')
routes = require('./routes')
http = require('http')
path = require('path')

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
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.cookieParser())
  app.use(express.bodyParser())
  app.use(express.session(secret: 'bankshot25'))
  app.use(app.router)

# development only
app.configure 'development', ->
  app.use(express.errorHandler())

# database
Kaiseki = require('kaiseki')
kaisek = app.kaiseki = new Kaiseki(app.config.PARSE_APP_ID, app.config.PARSE_REST_API_KEY)

# routes
app.get('/', routes.index)
app.get('/extras', routes.extras)
app.get('/bookmarklet', routes.bookmarklet)

app.get('/items', routes.items.index)
app.get('/items/new', routes.items.new)
app.post('/items', routes.items.create)

http.createServer(app).listen app.get('port'), ->
  console.log("Express server listening on port #{app.get('port')}")
