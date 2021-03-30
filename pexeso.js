let trigger;
let idOfFirstCard;
let idOfSecondCard;
let firstCard;
let secondCard;

let numOnPair = 1;
let numOfGuessedCards = 0; 
let moves = 0;   
let turn = 0;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
      
let txt = document.getElementById("text"); 
let txt2 = document.getElementById("tex"); 
let txt3 = document.getElementById("te");

function writeInArrThenShuffleArrAndWriteNumsInDivs()
{
  let mixedArr = []; 
  let gameContainer = document.getElementById("game");   
  
  gameContainer.innerHTML = " ";                   
  txt.innerHTML = "Moves: " + moves;                                                  
  txt2.innerHTML = "Player one is on the move.";
  txt3.innerHTML = "Score player one: " + scorePlayerOne + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Score player one: " + scorePlayerTwo; 
  
  for(let i = 0; i < 20; i+=2)
  {
    mixedArr[i] = numOnPair;               
    mixedArr[i+1] = numOnPair;
            
    numOnPair++;
          
  }         
                   
  for (let j = 0; j < mixedArr.length; j++)  
  {            
    let current = mixedArr[j];                                   
    let random = Math.floor(Math.random() * mixedArr.length);   
                                                              
    mixedArr[j] = mixedArr[random];                                                                                     
    mixedArr[random] = current;                                
                                                                                     
  }
          
  for (let k = 0; k < mixedArr.length; k++)
  {
    let card = document.createElement("div");
    card.setAttribute("class", "box");
    gameContainer.appendChild(card); 
              
  } 
          
  let allCards = document.getElementsByClassName("box");

  for (let l = 0; l < allCards.length; l++)
  {
    allCards[l].setAttribute("id", l)
    allCards[l].addEventListener("click", test);
    
    let inside = document.createElement("div")        
    inside.setAttribute("class", "textInBox " + l);
    inside.innerText = mixedArr[l];

    allCards[l].appendChild(inside);  
                
  }
            
}

writeInArrThenShuffleArrAndWriteNumsInDivs();
          
function test()
{    
  if(numOfGuessedCards == 0)
  { 
    idOfFirstCard = this.id;
            
    document.getElementById(idOfFirstCard).classList.add("maybe"); 
    document.getElementsByClassName("textInBox " + idOfFirstCard)[0].classList.add("visible"); 
  
    firstCard = document.getElementsByClassName("textInBox " + idOfFirstCard)[0].innerText;     
                                                                                                
    numOfGuessedCards++;                                                                      
                
  }
  
  else if(numOfGuessedCards == 1)
  {                            
    idOfSecondCard = this.id;    
       
    if(idOfFirstCard != idOfSecondCard)    
    {
      document.getElementById(idOfSecondCard).classList.add("maybe"); 
      document.getElementsByClassName("textInBox " + idOfSecondCard)[0].classList.add("visible"); 
  
      secondCard = document.getElementsByClassName("textInBox " + idOfSecondCard)[0].innerText;

      numOfGuessedCards++;            
            
    }
              
  }   
            
  if(numOfGuessedCards == 2)
  {
    clearTimeout(trigger); 
    trigger = setTimeout(function () {
      areBothCardsSameOrNot(); 
      numOfGuessedCards = 0;
      
    }, 600); 
  
  }
   
}
          
function areBothCardsSameOrNot()
{
  if(firstCard == secondCard)
 {
    document.getElementById(idOfFirstCard).classList.remove("maybe");                  
    document.getElementById(idOfSecondCard).classList.remove("maybe"); 
               
    document.getElementById(idOfFirstCard).classList.add("yes"); 
    document.getElementById(idOfFirstCard).style.pointerEvents = "none"; 
                   
    document.getElementById(idOfSecondCard).classList.add("yes");  
    document.getElementById(idOfSecondCard).style.pointerEvents = "none";
    
    moves++;
    txt.innerHTML = "Moves: " + moves; 
    
    if(turn % 2 == 0)
    {
      scorePlayerOne += 100;

    }  else {

      scorePlayerTwo += 100;
    
    }
                       
  } else {
                 
    document.getElementById(idOfFirstCard).classList.remove("maybe");                 
    document.getElementById(idOfSecondCard).classList.remove("maybe");
    
    document.getElementsByClassName("textInBox " + idOfFirstCard)[0].classList.remove("visible");                
    document.getElementsByClassName("textInBox " + idOfSecondCard)[0].classList.remove("visible"); 
    
    moves++;
    turn++;
    txt.innerHTML = "Moves: " + moves; 
                 
  }
  
  if(turn % 2 == 0)
    {
      txt2.innerHTML = "Player one is on the move.";
       
    }  else {
    
      txt2.innerHTML = "Player two is on the move.";
    
    }
    
    txt3.innerHTML = "Score player one: " + scorePlayerOne + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Score player one: " + scorePlayerTwo; 
                                  
}

function reset()
{
  numOnPair = 1;
  numOfGuessedCards = 0; 
  moves = 0;
  turn = 0;
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  writeInArrThenShuffleArrAndWriteNumsInDivs(); 
 
}