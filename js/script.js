/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
{
  quote:"You could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
  source: "Charlie Day",
  citation: "It's Always Sunny in Philadelphia",
  tags: "camel, scimitar, milk"
},
{
  quote:"You are my fire</p><p>The one desire</p><p>Believe when I say</p><p>I want it that way",
  source: "Backstreet Boys",
  citation: "Millenium",
  date: "1999",
  tags: "voice of a generation, transcendent"
},
{
  quote:"I was born for politics!  I have great hair, and I love lying",
  source: "Gina Linetti",
  citation: "Brooklyn 99",
},
{
  quote:"Mmm Chunt please!",
  source: "Chunt",
  citation: "Hello From The Magic Tavern",
  tags: "chunt"
},
{
  quote:"When you eat ice cream, the cream never ends!",
  source: "Griffin McElroy",
  citation: "My Brother, My Brother, and Me",
  date: "Hogsplash (414)",
  tags: "hogsplash, brown, school"
}
]



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
   - DONE?
***/
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * Math.floor(5));
  console.log(quotes[randomNumber]);
}
// This won't be called here once this is done
getRandomQuote(quotes);


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

// Currently this doesn't know what I'm calling with .quote etc dot notation
function printQuote() {
  var currentQuote = getRandomQuote(quotes);
  for(var prop in currentQuote) {
    console.log(currentQuote[prop]);
    var stringHTML = "";
    stringHTML += '<p class="quote"">' + currentQuote.quote + '</p>';
    stringHTML += '<p class="source">' + currentQuote.source + '</p>';
    stringHTML += '<p class="citation">' + currentQuote.citation + '</p>';
    stringHTML += '<p class="date">' + currentQuote.date + '</p>';
    stringHTML += '<p class="tags">' + currentQuote.tags + '</p>';
    console.log(stringHTML);
  }
}
printQuote(quotes);


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
