displayValue = document.querySelector('#displayValue');
ongoingDisplay = document.querySelector('.ongoingDisplay');

const buttonContainer = document.getElementById('buttonContainer');
functionSelection = document.querySelectorAll('.functions');
functionSelectionArr = Array.from(functionSelection);
functionArray = [];
functionObject = {};
randomArray = [];
randomArray2 = [];
isInteger = true;




function divide(x, y) {
  return roundTo((x/y),8);
}
function multiply(x, y) {
  return roundTo((x*y),8);
}

function subtract(x, y) {
  return  roundTo((x-y),8);
}

function add(x, y) {
  return roundTo((x+y),8);
}

function operate(array) {
  if (typeof number === array[0]  && typeof number === array[2] ) {
    alert("not valid");
  }
  x = parseFloat(array[0])
  y = parseFloat(array[2])
  switch (array[1] ) {
    case 'divide':
    return divide(x,y);
    
    case 'multiply':
    return multiply(x,y)
    
    case 'subtract':
    return subtract(x,y)
    
    case 'add':
    return add(x,y)
    
    
    default:
    console.log("Something went horribly wrong...");
  }
  
}



buttonContainer.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  
  if (e.target.getAttribute('class') == "numbers"){
    let tempN = (e.target.id);
    randomArray.push(parseInt(tempN));
    let currentValue = randomArray.join('');
    displayValue.innerHTML = parseFloat(currentValue);
    //console.log(parseInt(displayValue.innerHTML));
    
  }
  
  if (e.target.getAttribute('class') == "functions"){
    //first_click = true;
    //console.log(parseInt(displayValue.innerHTML));
    if (functionArray[0] == undefined) {
      functionArray.push(parseFloat(displayValue.innerHTML));
      //first_click == false
    } 
    randomArray = [];
    currentValue = '';
    
    if (functionArray[1] == undefined) {
      displayValue.innerHTML = e.target.id;
      functionArray.push(e.target.id);
      //console.log(parseInt(displayValue.innerHTML));
      //first_click == false
    } 

  
    console.log(typeof(parseFloat(displayValue.innerHTML)));
    console.log(parseFloat(displayValue.innerHTML));
    console.log(isNaN(parseFloat(displayValue.innerHTML)));
    
    if (isNaN(parseFloat(displayValue.innerHTML)) === false) {
      functionArray.push(displayValue.innerHTML);
      if (functionArray[1] == 'divide' && functionArray[2] == 0) {
        alert ('Cannot Dividie by Zero, cmon');
        randomArray = [];
        currentValue = '';
        displayValue.innerHTML = ''; 
        functionArray = [];
        return;    
      } 
      randomArray = [];
      currentValue = '';
      displayValue.innerHTML = operate(functionArray);
      functionArray = []
      functionArray[0] = displayValue.innerHTML;
      functionArray.push(e.target.id);
      //first_click == false 
    }
  }
  
  if (e.target.getAttribute('class') == "equal"){
    
    functionArray.push(displayValue.innerHTML);
    if (functionArray[1] == 'divide' && functionArray[2] == 0) {
      alert ('Cannot Dividie by Zero, cmon');
      randomArray = [];
      currentValue = '';
      displayValue.innerHTML = ''; 
      functionArray = [];
      return;    
    } 
    randomArray = [];
    currentValue = '';
    displayValue.innerHTML = operate(functionArray);
    functionArray = []
    functionArray[0] = displayValue.innerHTML;
  }
  
  if (e.target.getAttribute('class') == "clear"){
    randomArray = [];
    currentValue = '';
    displayValue.innerHTML = ''; 
    functionArray = [];
  }
  
  ongoingDisplay.innerHTML = functionArray.join(' ');
});


function roundTo(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  
}





// function ongoingDisplayMessage (ongoingDisplay)  {
//   console.log(ongoingDisplay.toString())

//   // for(i = 0; i<ongoingDisplay.length; i++){

//   //   ongoingDisplay[i] += " ";
//   //   ongoingDisplay = ongoingDisplay[i];
//   // } 
// console.log(ongoingDisplay);
// }

// function splitTheFunctionArray (array)  {
//   for(i = 0; i<array.length; i++){
//     // if ((typeof(functionArray[i]) == number)){
//     //   console.log(typeof(functionArray[i]));
//     // }
//     // if ((typeof(functionArray[i]) == string)){
//     //   console.log(typeof(functionArray[i]));
//     // }
//     console.log(functionArray.length);
//     console.log(typeof(functionArray[i]));
//     console.log(functionArray[i]);

//   } 
// }


// buttonContainer.addEventListener('click', (e) => {
//   const isButton = e.target.nodeName === 'BUTTON';
//   if (!isButton) {
//     return;
//   }

//   let tempN = (e.target.id);
//   functionArray.push(tempN);
//   let currentValue = functionArray.join('');
//   displayValue.innerHTML = currentValue;

// })

//Create the functions that populate the display when you click the number buttons
// functionSelectionArr.forEach(function(e){
//   e.addEventListener('click', () => {
//     let tempF = e.id;
//     x = functionArray[0];
//     y = 9;
//     //functionArray.push(tempF);
//     displayValue.innerHTML = operate(x,y,tempF);

//   });
// });

// functionSelectionArr.forEach(function(e){
//   e.addEventListener('click', () => {
//     let tempF = e.id;
//     x = 5;
//     y = 9;
//     functionArray.push(displayValue);
//     displayValue.innerHTML = operate(x,y,tempF);
//     functionArray.push(displayValue);

//     functionObject.secondIteration = operate(x,y,tempF);
//   });
// }); 



// numberSelectionArr.forEach(function(e){
//   e.addEventListener('click', () => {
//     let functionStatement = e.innerHTML;
//     displayValue.innerHTML = number1 + ' ' + functionStatement;


//     numberSelectionArr.forEach(function(e){
//       e.addEventListener('click', () => {
//         let number2 = e.innerHTML;
//         displayValue.innerHTML = number1 + ' ' + functionStatement+ ' ' + number2;


// numberSelectionArr.forEach(buttonAvail => buttonAvail.addEventListener('click', () => {
//   let number1 = this.displayValue;
//   displayValue.innerHTML = number1;

//   numberSelectionArr.forEach(buttonAvail => buttonAvail.addEventListener('click', () => {
//   let number2 = this.displayValue;
//   displayValue.innerHTML = number2;  

//   }));

// }));


//numberSelection.addEventListener("click", 

// document.querySelectorAll(".buttons").forEach(function (element, id)
// {
//   input.addEventListener("change", function ()
//   {
//     alert("button: " + id);
//   });
// });




// function power(x, powerV) {
//   sumX = 1
//   for (i = 0; i < powerV; i++) {
//     sumX *= x

//   }
//   return sumX;
// }

// function factorial(x) {
//   sumX = 0
//   for (i = x; i > 0; i--) {
//     sumX += x

//   }
//   return sumX;
// }




// buttonContainer.addEventListener('click', (event) => {
//   const isButton = event.target.nodeName === 'BUTTON';
//   if (!isButton) {
//     return;
//   }

//   console.dir(event.target.id);
// })

//Create the functions that populate the display when you click the number buttons
// numberSelectionArr.forEach(function(e){
//   e.addEventListener('click', () => {
//     let tempN = e.innerHTML;
//     functionArray.push(tempN);
//     let currentValue = functionArray.join('');
//     displayValue.innerHTML = currentValue;
//     //functionObject.push(currentValue);  
//     //console.log(functionObject);
//   });