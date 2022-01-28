const request = require('request')
const cheerio = require('cheerio')

request('https://www.thesaurus.com/browse/happy', cb);

function cb(error, response, html) {
    if (error) {
        console.log('Error');
    } else {
        handleHtml(html);
    }
}

function handleHtml(html) {
    let selTool = cheerio.load(html)

    let contentArr = selTool('a.css-1kg1yv8.eh475bn0')
    for (let i = 0; i < 5; i++) {
        console.log(selTool(contentArr[i]).text());
    }

}