var questionInput = document.querySelector("#question");
var getAnswerButton = document.querySelector(".get-your-answer-button");
var clearButton = document.querySelector(".clear");
var eightBallImage = document.querySelector(".eight-ball")
var output = document.querySelector(".answer-output")

getAnswerButton.addEventListener("click", displayAnswer);

function displayAnswer() {
  event.preventDefault();
  if(questionInput.value === ""){
    return
  } else {
    eightBallImage.classList.add("hidden")
    output.classList.remove("hidden")
    output.innerHTML = `
    <h2>"${questionInput.value}"</h2>
    <h3>${answers[getRandomIndex(answers)]}
    `
    questionInput.value = "";
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

var answers = [
  "It is certain.",
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
]
