//This function generates basic level division questions
window.divisionBasicQuestions = function()
{
  document.body.innerHTML = "";
  //write "division game"
  window.divisionElement = document.createElement("p");
  window.node = document.createTextNode("Division Game");
  divisionElement.appendChild(node);
  divisionElement.setAttribute("class", "division");
  document.body.appendChild(divisionElement);
  //get two random numbers
  window.num1 = getRandomNumber(1, 50);
  window.num2 = getRandomNumber(1, 50);
  //perform division operation and store value in quotient
  window.quotient = num1 / num2;
  //store the remainder in the variable "remainder"
  window.remainder = num1 % num2;
  if(remainder == 0)
  {
    //box to display first number
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display / symbol
    window.divisionSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("/");
    divisionSymbolElement.appendChild(node1);
    divisionSymbolElement.id = "divisionSymbol";
    divisionSymbolElement.setAttribute("class", "divisionSymbol");
    document.body.appendChild(divisionSymbolElement);
    //box to display second number
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = num2;
    secondNumberElement.id = "secondNum";
    secondNumberElement.setAttribute("class", "Num2");
    document.body.appendChild(secondNumberElement);
    //display = symbol
    window.equalSymbolElement = document.createElement("p");
    window.node2 = document.createTextNode("=");
    equalSymbolElement.appendChild(node2);
    equalSymbolElement.id = "equalSymbol";
    equalSymbolElement.setAttribute("class", "equalSymbol");
    document.body.appendChild(equalSymbolElement);
    //get 2 random numbers to be displayed in the option box
    window.option1 = getRandomNumber(1, 50);
    window.option2 = getRandomNumber(1, 50);
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = quotient;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, quotient];
    //create 3 boxes which contains options
    for(var d=0;d<3;d++)
    {
      var optionIndex = Math.floor(Math.random()*options.length);
      window.optionElement = document.createElement("p");
      window.node3 = document.createTextNode(options[optionIndex]);
      optionElement.appendChild(node3);
      optionElement.setAttribute("class", "options");
      optionElement.id = "options"+d;
      optionElement.mybox = options[optionIndex];
      optionElement.setAttribute("draggable","true");
      optionElement.ondragstart = onOptionDragStart;
      document.body.appendChild(optionElement);
      options.splice(optionIndex, 1);
    }
  }
  else
  divisionBasicQuestions();
}
//This function generates intermediate level division questions
window.divisionIntermediateQuestions = function()
{
  document.body.innerHTML = "";
  //write "division game"
  window.divisionElement = document.createElement("p");
  window.node = document.createTextNode("Division Game");
  divisionElement.appendChild(node);
  divisionElement.setAttribute("class", "division");
  document.body.appendChild(divisionElement);
  //get two random numbers
  window.num1 = getRandomNumber(1, 100);
  window.num2 = getRandomNumber(1, 100);
  //perform division operation and store value in quotient
  window.quotient = num1 / num2;
  //store the remainder in the variable "remainder"
  window.remainder = num1 % num2;
  if(remainder == 0)
  {
    //box to display first number
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display / symbol
    window.divisionSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("/");
    divisionSymbolElement.appendChild(node1);
    divisionSymbolElement.id = "divisionSymbol";
    divisionSymbolElement.setAttribute("class", "divisionSymbol");
    document.body.appendChild(divisionSymbolElement);
    //box to display second number
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = num2;
    secondNumberElement.id = "secondNum";
    secondNumberElement.setAttribute("class", "Num2");
    document.body.appendChild(secondNumberElement);
    //display = symbol
    window.equalSymbolElement = document.createElement("p");
    window.node2 = document.createTextNode("=");
    equalSymbolElement.appendChild(node2);
    equalSymbolElement.id = "equalSymbol";
    equalSymbolElement.setAttribute("class", "equalSymbol");
    document.body.appendChild(equalSymbolElement);
    //get 2 random numbers to be displayed in the option box
    window.option1 = getRandomNumber(1, 50);
    window.option2 = getRandomNumber(1, 50);
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = quotient;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, quotient];
    //create 3 boxes which contains options
    for(var d=0;d<3;d++)
    {
      var optionIndex = Math.floor(Math.random()*options.length);
      window.optionElement = document.createElement("p");
      window.node3 = document.createTextNode(options[optionIndex]);
      optionElement.appendChild(node3);
      optionElement.setAttribute("class", "options");
      optionElement.id = "options"+d;
      optionElement.mybox = options[optionIndex];
      optionElement.setAttribute("draggable","true");
      optionElement.ondragstart = onOptionDragStart;
      document.body.appendChild(optionElement);
      options.splice(optionIndex, 1);
    }
  }
  else
  divisionIntermediateQuestions();
}
//This function generates intermediate level division questions
window.divisionDifficultQuestions = function()
{
  document.body.innerHTML = "";
  //write "division game"
  window.divisionElement = document.createElement("p");
  window.node = document.createTextNode("Division Game");
  divisionElement.appendChild(node);
  divisionElement.setAttribute("class", "division");
  document.body.appendChild(divisionElement);
  //get two random numbers
  window.num1 = getRandomNumber(50, 100);
  window.num2 = getRandomNumber(10, 50);
  //perform division operation and store value in quotient
  window.quotient = num1 / num2;
  //store the remainder in the variable "remainder"
  window.remainder = num1 % num2;
  if(remainder == 0)
  {
    //box to display first number
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display / symbol
    window.divisionSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("/");
    divisionSymbolElement.appendChild(node1);
    divisionSymbolElement.id = "divisionSymbol";
    divisionSymbolElement.setAttribute("class", "divisionSymbol");
    document.body.appendChild(divisionSymbolElement);
    //box to display second number
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = num2;
    secondNumberElement.id = "secondNum";
    secondNumberElement.setAttribute("class", "Num2");
    document.body.appendChild(secondNumberElement);
    //display = symbol
    window.equalSymbolElement = document.createElement("p");
    window.node2 = document.createTextNode("=");
    equalSymbolElement.appendChild(node2);
    equalSymbolElement.id = "equalSymbol";
    equalSymbolElement.setAttribute("class", "equalSymbol");
    document.body.appendChild(equalSymbolElement);
    //get 2 random numbers to be displayed in the option box
    window.option1 = getRandomNumber(1, 50);
    window.option2 = getRandomNumber(1, 50);
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = quotient;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, quotient];
    //create 3 boxes which contains options
    for(var d=0;d<3;d++)
    {
      var optionIndex = Math.floor(Math.random()*options.length);
      window.optionElement = document.createElement("p");
      window.node3 = document.createTextNode(options[optionIndex]);
      optionElement.appendChild(node3);
      optionElement.setAttribute("class", "options");
      optionElement.id = "options"+d;
      optionElement.mybox = options[optionIndex];
      optionElement.setAttribute("draggable","true");
      optionElement.ondragstart = onOptionDragStart;
      document.body.appendChild(optionElement);
      options.splice(optionIndex, 1);
    }
  }
  else
  divisionDifficultQuestions();
}
