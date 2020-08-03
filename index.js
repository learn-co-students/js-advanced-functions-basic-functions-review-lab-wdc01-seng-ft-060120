function saturdayFun(str = "roller-skate")
{
  return `This Saturday, I want to ${str}!`
}

let mondayWork = function(str = "go to the office")
{
  return `This Monday, I will ${str}.`
}

function wrapAdjective(flair = "*")
{
  return function(str = "special")
  {
    return `You are ${flair}${str}${flair}!`
  }
}

const Calculator = 
{
  add(a,b){return a+b;},
  subtract(a,b){return a-b;},
  multiply(a,b){return a*b;},
  divide(a,b){return a/b;}
  
};
function actionApplyer(start,functions)
{
  if (functions)
  {
    for(let i = 0; i < functions.length; i++)
    {
      start = functions[i](start);
    }
  }
  return start;
}