import express from 'express';
import fetch from 'node-fetch';
import casual from 'casual';
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async(req, res) => {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let quote = data.quoteText;
    let author = data.firstName + " " + data.lastName;
    res.render('index', {
        currentPage: 'home',
        quote, author
    })
});

app.get('/scope', async(req, res) => {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let quote = data.quoteText;
    let author = data.firstName + " " + data.lastName;
    casual.define('user1', function() {
        return {
            first_name: casual.first_name,
            last_name: casual.last_name,
            card_type: casual.card_type,
            card_number: casual.card_number(),
            card_exp: casual.card_exp
        };
    });

    let format = '1-800-###-#### Ext. ####'

    casual.define('user2', function() {
        return {
            first_name: casual.first_name,
            last_name: casual.last_name,
            company_name: casual.company_name,
            email: casual.email,
            phone_number: casual.numerify(format),
            file_ext: casual.file_extension
        };
    });

    let user_1 = casual.user1;
    let user_2 = casual.user2;

    let email_domains = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@aol.com'];
    let email_domain_provider = {email_domain: function() {return casual.random_element(email_domains);}};
    casual.register_provider(email_domain_provider);
    let user_1_domain = casual.email_domain;
    console.log(user_1);
    console.log(user_2);
    console.log(user_1_domain);
    res.render('scope', {
        currentPage: 'scope',
        user_1, user_2, user_1_domain, quote, author
    })
});

app.get('/types', async(req, res) => {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let quote = data.quoteText;
    let author = data.firstName + " " + data.lastName;
    res.render('types', {
        currentPage: 'types', quote, author
    })
});

app.get('/defense', async(req, res) => {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let quote = data.quoteText;
    let author = data.firstName + " " + data.lastName;
    res.render('defense', {
        currentPage: 'defense', quote, author
    })
});

app.get('/recovery', async(req, res) => {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let quote = data.quoteText;
    let author = data.firstName + " " + data.lastName;
    res.render('recovery', {
        currentPage: 'recovery', quote, author
    })
});

app.listen(3000, () => {
    console.log('server started')
});