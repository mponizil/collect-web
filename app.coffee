express = require('express')
routes = require('./routes')
http = require('http')
path = require('path')

app = express()

# all environments
app.set('port', process.env.PORT or 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

# development only
app.configure 'development', ->
  app.use(express.errorHandler())

app.get('/', routes.index)
app.get('/extras', routes.extras)
app.get('/bookmarklet', routes.bookmarklet)
app.get('/popup', routes.popup)

http.createServer(app).listen app.get('port'), ->
  console.log("Express server listening on port #{app.get('port')}")