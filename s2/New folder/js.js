// -----------------------------------------task 3 --------------------------------------------

let word = prompt("enter Ur word");
let originalWord = word;
let getWordLength = function () {
  return word.length;
};

let trialNum = function () {
  return getWordLength() + 2;
};

let trials = trialNum();

let setChar = function(msg){
    return prompt(msg);
}


let isOneChar = function(c){
    if(c.length == 1){
        return true;
    }
    else return false;
}


let correctAns=0;
let wrongAns=0;

let charExist = function(c1,w1){
  return w1.split(c1).length-1;
}
let getCorrectAns = function(n){
  correctAns +=n
}
let getWrongAns = function(){
  wrongAns +=1;
}

let gameData = {
  word: word,
  correctAns: correctAns,
  wrongAns: wrongAns,
  status: "playing"
}

let inserted=[];

let charInserted = function(c){
  let exist = 0;
  for(let i=0; i<inserted.length; i++)
    {
      if(c==inserted[i]){
        exist=1;
        break;
      }
    }
    if(exist==0){
      inserted.push(c);
    }
    else{
      alert("U inserted this char before")
    }
}



let getTrial = function(){
  let c = setChar("enter one char");
  if(isOneChar(c)){
    let charExistNum= charExist(c,word)
  if(charExistNum<1){
    wrongAns+=1;
  }
  else{

    correctAns +=charExistNum;
  }
  }
  
}