// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(string="*") {
    return function(adjective="special") {
        return `You are ${string}${adjective}${string}!`
    }
}
const Calculator = {
    add: function(a, b) {
    return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

const actionApplyer = function(int, array) {
    if(array.length === 0 ) {
        return int
    }
    return (((int * 2) + 1000) % 7)
}
