function scuberGreetingForFeet(someValue){
  if (someValue <= 400 ){
    return( "This one is on me!");
  }
    else if (2000 < someValue && someValue < 2500){
      return "I will gladly take your thirty bucks.";
    } 
      else {return "No can do."}
}



function ternaryCheckCity(destination){
  const city = "NYC"
  const message  = destination == city ? 'Ok, sounds good.' : 'No go.'
  return message;
}

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
  
}
