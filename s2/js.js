/* -----------------------------------------task 1 --------------------------------------------
var points = [];

for (let i = 0; i < 6; i++) {
  points[i] = window.prompt("enter Ur points team" + `${i + 1}`);
}
console.log(points);
for (let i = 0; i < 6; i++) {
  points[i] = parseInt(points[i]);
}
console.log(points);
var max = Math.max(...points);
console.log(max);

var min = Math.min(...points);
console.log(min);

var total = 0;
for (let i = 0; i < 6; i++) {
  total += points[i];
}
var avg = total / points.length;
console.log(avg);
*/

/* -----------------------------------------task 2 bmi --------------------------------------------

function checkValidationForHieght(n) {
  try {
    if (Number.isNaN(n)) throw new Error(`${n}` + ": Hieght must be a number");
    if (n > 2.5) throw new Error(`${n}` + ": Hieght too large");
    if (n <= 0.3) throw new Error(`${n}` + ": Hieght too small");
    return true;
  } catch (e) {
    alert(e);
    return false;
  }
}

function checkValidationForWeight(n) {
  try {
    if (Number.isNaN(n)) throw new Error(`${n}` + ": Weight must be a number");
    if (n > 200) throw new Error(`${n}` + ": too large Weight");
    if (n <= 10) throw new Error(`${n}` + ": too small Weight");
    return true;
  } catch (e) {
    alert(e);
    return false;
  }
}

let h1 = parseFloat(prompt("enter Ur h1"));
let w1 = parseFloat(prompt("enter Ur w1"));

let h2 = parseFloat(prompt("enter Ur h2"));
let w2 = parseFloat(prompt("enter Ur w2"));

function bmi(h, w) {
  return h / w ** 2;
}

function minBmi(b1, b2) {
  return Math.min(b1, b2);
}

if (
  checkValidationForHieght(h1) &&
  checkValidationForHieght(h2) &&
  checkValidationForWeight(w1) &&
  checkValidationForWeight(w2)
) {
  console.log("ur min bmi = " + minBmi(bmi(h1, w1), bmi(h2, w2)));
}
*/

// -----------------------------------------task 3 --------------------------------------------

let word = prompt("enter Ur word");

let getWordLength = function () {
  return word.length;
};

let trialNum = function () {
  return getWordLength() + 2;
};

let trials = trialNum();

let checkValidat = function (c) {
  if (c.length == 1) {
    return true;
  } else {
    alert("wrong char");
    return false;
  }
};

let getCharIndex = function (c) {
  if (word.charAt(c) == -1) {
    return false;
  } else {
    return word.charAt(c);
  }
};

let spliceChar = function (c) {
  word = word.substr(c, 1);
};

let correctTrial = 0;
let WrongTrial = 0;

for (let i = 0; i < trials; i++) {
  let char = prompt("enter Ur one char");
  if (checkValidat(char)) {
    if (getCharIndex(char)) {
      correctTrial += 1;
      spliceChar(char);
    } else {
      WrongTrial += 1;
    }
  }
  if (correctTrial == getWordLength()) {
    alert("winner");
    break;
  }
  if (WrongTrial > getWordLength()) {
    alert("loser");
    break;
  }
}
