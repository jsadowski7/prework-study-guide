//console.log = print
// var kework for variable
// ex. var shape = "circle";
// variable is topics, which contains string that include all topics studied in the module
// log method will output whatever is added in parentheses to the console
// value is considered falsy if value is: 0, -0, On, "", null, undefined, NaN, or false.
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

  console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

// a variable is a named container that allows us to store data in our code
// control flow is the order in which a computer executes code in a script