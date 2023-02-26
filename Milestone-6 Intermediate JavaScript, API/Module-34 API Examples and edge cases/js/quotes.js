const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = (quote) => {
    const viewQuote = document.getElementById('view-quote');
    const newQuote = quote.quote;
    viewQuote.innerText = newQuote;
}

loadQuote();