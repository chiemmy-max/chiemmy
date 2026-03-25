const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/views')))
app.set('PORT', process.env.PORT || 3000 );

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
app.get('/image\.chiemmy', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Chiemmy Image/imageFile.html'))
})
app.get('/travel-site', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Travels Web/HonorTravels.html'))
})

app.get('/music-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Music-App-Download/Music-download.html'))
})

app.get('/app-site', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Music-App-Download/App6.html'))
})

app.get('/tech-site', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/teaching/eduvibe1.html'))
})
// 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '/views/404.html'))
})
app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '/views/500.html'))
    console.log(err.stack)
})
// LISTEN
app.listen(app.get('PORT'), "0.0.0.0", () => {
    console.log('Server is running')
})