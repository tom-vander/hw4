import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/scope', (req, res) => {
    res.render('scope')
});

app.get('/types', (req, res) => {
    res.render('types')
});

app.get('/defense', (req, res) => {
    res.render('defense')
});

app.get('/recovery', (req, res) => {
    res.render('recovery')
});

app.listen(3000, () => {
    console.log('server started')
});