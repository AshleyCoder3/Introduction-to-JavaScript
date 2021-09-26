
const votingAge = 28
console.log(votingAge >= 18)

let a = 6 //lets variable be changed.
const b = 3
if(a > b){
    a = b - a
}
console.log(a)

const year = '1999'
let num = Number(year)
console.log(num)

function multiply(a,b) {
    return a * b
  }
console.log(multiply(2,4))

function dogYears(age){
    return age * 7
}

function hungryDog(lbs, age){
   if(age >= 1){
       if(lbs <= 5){
           return lbs * .05
       } else if(lbs >= 6 && lbs <= 10){
           return lbs * .04
       } else if(lbs >= 11 && lbs <= 15){
           return lbs * .03
       } else if(lbs > 15){
           return lbs * .02
       }
   } else{
       if(age >= 2/12 && age <= 4/12){
           return lbs * .10
       }else if(age >= 4/12 && age >= 7/12){
           return lbs * .05
       } else if(age >= 7/12 && age < 1){
           return lbs * .04
       }
   }
  }

let computer = Math.random()
if(computer < .3){
    computer ='scissors'
} if( computer > .6){
    computer = 'paper'
} else {
    computer = 'rock'
}

function game(user, computer){

    if (user === computer) {
    return "it's a tie"
    } else if (user === 'scissors' && computer === 'paper' ||
    user === 'paper' && computer === 'rock'||
    user === 'rock' && computer === 'scissors'){
        return 'you win!'
    } else{
        return 'you lose!'
    }
}

function miles(kilo){
    return kilo * 0.621371
  }

function feet(cm){
   return cm / 30.48
  }

function annoyingSong(number){
        return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall`
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(/*Your Code here */){
  /*Your Code here */
  }
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
