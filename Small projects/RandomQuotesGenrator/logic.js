const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
  "magenta",
  "lime",
  "teal"
];

const quotes = [
   ["The best way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["Don’t let yesterday take up too much of today.", "Will Rogers"],
  ["It’s not whether you get knocked down, it’s whether you get up.", "Vince Lombardi"],
  ["If you are working on something exciting, it will keep you motivated.", "Unknown"],
  ["Success is not in what you have, but who you are.", "Bo Bennett"],
  ["Hard work beats talent when talent doesn’t work hard.", "Tim Notke"],
  ["Do what you can with all you have, wherever you are.", "Theodore Roosevelt"],
  ["Dream big and dare to fail.", "Norman Vaughan"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["Your limitation—it’s only your imagination.", "Unknown"],
  ["Push yourself, because no one else is going to do it for you.", "Unknown"],
  ["Great things never come from comfort zones.", "Unknown"],
  ["Dream it. Wish it. Do it.", "Unknown"],
  ["Don’t stop when you’re tired. Stop when you’re done.", "Marilyn Monroe"],
  ["Little things make big days.", "Unknown"]
];

const mainArea=document.querySelector('#quote')

let currentQuote='';
let currentAuthor='';
let randomquote='';
let randomcolor='';

function getQuote(){
    randomquote=Math.floor(Math.random()*quotes.length);
    randomcolor=Math.floor(Math.random()*colors.length);
    currentQuote=quotes[randomquote][0];
    currentAuthor=quotes[randomquote][1];


    const markup = `<blockquote id="quote_text" class='text-left'>${currentQuote}</blockquote>
                <p id="author">--${currentAuthor}</p>`;

        mainArea.innerHTML=markup;

        document.body.style.background=colors[randomcolor];
        


}

const quotesButton=document.querySelector('#quote_btn')
quotesButton.addEventListener('click',getQuote)

