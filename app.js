const getUserChoice = userInput =>{
   userInput = userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
    return userInput;
  }else{
    console.log('Incorrect input');
  }
}
const getComputerChoice=()=>{
  var randomNumber =Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}
const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    console.log('the game was a tie');
  }
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      console.log('Computer won');
    }else{
      console.log('The user won');
    }
  }
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      console.log('Computer won');
    }
    else{
      console.log('You won');
    }
  }
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      console.log('Computer won');
    }
    else{
      console.log('You win');
    }
  }
}
const playGame=()=>{
  const userChoice=getUserChoice('paper');
  const computerChoice=getComputerChoice();
 console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}
playGame();
