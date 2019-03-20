/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***************** 
  The instructions for this project said 'Do not make any changes to this (index.html) file.'
  I made changes anyways so I could format my tabs section nicely.
  I hope that's not a problem.
 *****************/

var quotes = [
{
  quote:"You could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
  source: "Charlie Day",
  citation: "It's Always Sunny in Philadelphia",
  tags: "camel | scimitar | milk"
},
{
  quote:"You are my fire. The one desire. Believe when I say, I want it that way",
  source: "Backstreet Boys",
  citation: "Millenium",
  year: 1999,
  tags: "voice of a generation | transcendent"
},
{
  quote:"I was born for politics!  I have great hair, and I love lying",
  source: "Gina Linetti",
  citation: "Brooklyn 99",
},
{
  quote:"A bear could be almost anything!",
  source: "Usidore",
  citation: "Hello From The Magic Tavern",
  tags: "master | light | shadow"
},
{
  quote:"When you eat ice cream, the cream never ends!",
  source: "Griffin McElroy",
  citation: "My Brother, My Brother, and Me",
  year: 2016,
  tags: "hogsplash | brown | cream"
}
]

function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * Math.floor(5));
  return(quotes[randomNumber]);
}

/*****************
   I left the console.log() lines in here because they have helped me troubleshoot and I figure they'd be helpful during peer review if I'm missing something
   If I'm supposed to take them out before submitting these, let me know and I'll do so next time
*****************/

function printQuote() {
  var currentQuote = getRandomQuote(quotes);
  for(var prop in currentQuote) {
    console.log(currentQuote[prop]);
    var outputDiv = "";
    outputDiv += '<p class="quote">' + currentQuote.quote + '</p>';
    outputDiv += '<p class="source">' + currentQuote.source;
    outputDiv += '<span class="citation">' + currentQuote.citation + '</span>';
    if(currentQuote.year) {
      outputDiv += '<span class="year">' + currentQuote.year + '</span>';
    } if (currentQuote.tags) {
      outputDiv += '<p class="tags">Tags: ' + currentQuote.tags + '</p>';
    }
    outputDiv += '</p>'
  }
  document.getElementById("quote-box").innerHTML = outputDiv;
  function getNewBackground() {
    var newColor = Math.floor(Math.random() * Math.floor(999999));
    console.log(newColor);
    document.getElementById("body").style.backgroundColor = '#' + newColor;
   }
   getNewBackground();
  }
printQuote(quotes);


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
