const quote = document.querySelector(".bq__quote");
const author = document.querySelector(".bq__author");
const main = document.querySelector("main");


(async function fetchData() {
    const resp =  await fetch("./data/data.json");
    const data = await resp.json();

    window.localStorage.setItem("bquotes", JSON.stringify(data));
})();

(function renderQuote() {
    const data = JSON.parse(window.localStorage.getItem("bquotes"));
    let randomIndex = Math.floor(Math.random() * data.length); // Random num to load random quote
    let randomQuoteSVG = Math.floor((Math.random() * 5) + 1); // Random num to load random SVG
    
    quote.innerHTML = data[randomIndex].quote;
    author.innerHTML = `&#8212 ${data[randomIndex].author}`;
    main.classList.add(`q${randomQuoteSVG}`);
})();


