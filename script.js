const quoteText = document.querySelector('.quote');
quoteBtn = document.querySelector('button');
authorName = document.querySelector('.author .name');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');
twitterBtn = document.querySelector('.twitter');

const quotes =  [
    {
        quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: 'Nelson mandela'
    },
    {
        quote:`"The way to get started is to quit talking and begin doing."`,
        person: 'Walt Disney'
    },
    {
        quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        person: 'Steve Jobs'
    },
    {
        quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: 'James Cameron'
    },
    {
        quote:`"Women belong to the kitchen and the other room."`,
        person: 'Muhammadu Buhari'
    },
    {
        quote:`"What money cannot do, more money can do it."`,
        person: 'Godswill Akpabio'
    },
    {
        quote:`"The future belongs to those who believe in the beauty of their dreams."`,
        person: 'Eleanor Roosevelt'
    },
    {
        quote:`"Life is either a daring adventure or nothing at all."`,
        person: 'Helen Keller'
    },
    {
        quote:`"A lizard in Nigeria can never become a Godzilla in America"`,
        person: 'Nsikak Akpan'
    },
    {
        quote:`"Never let the fear of striking out keep you from playing the game."`,
        person: 'Babe Ruth'
    }
]

quoteBtn.addEventListener('click', randomQuote);

function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quotes...';
    let i = Math.floor(Math.random()*quotes.length)
    quoteText.innerText = quotes[i].quote;
    authorName.innerText = quotes[i].person;
    quoteBtn.innerText = 'New Qoute';
    quoteBtn.classList.remove('loading');
}

soundBtn.addEventListener('click', () =>  {
    //the speechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);// speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener('click', () =>  {
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click', () =>  {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '_blank'); // opening a new twitter tab with passing quote in the url
})




