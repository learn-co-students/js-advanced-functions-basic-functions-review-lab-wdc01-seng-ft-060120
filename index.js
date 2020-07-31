function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string=`*`) {
    return (str='special') => {
        return `You are ${string}${str}${string}!`;
    }
}

const Calculator = {
    add: (a,b) => {
        return a + b;
    }, 
    subtract: (a,b) => {
        return a - b;
    },
    multiply: (a,b) => {
        return a * b;
    },
    divide:(a,b) => {
        return a / b;
    }
}

function actionApplyer(int, array) {
    if(array.length === 0){
        return int;
    }
    return (((int * 2) + 1000) % 7)

}