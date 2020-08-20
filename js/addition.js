//This function generates basic level addition questions
window.additionBasicQuestions = function()
{
    document.body.innerHTML = "";
    //write "addition game"
    window.additionElement = document.createElement("p");
    window.node = document.createTextNode("Addition Game");
    additionElement.appendChild(node);
    additionElement.setAttribute("class", "add");
    document.body.appendChild(additionElement);
    //get 1st random number
    window.num1 = getRandomNumber(0, 100);
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    //firstNumberElement.id = "firstNum";
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display + symbol
    window.addSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("+");
    addSymbolElement.appendChild(node1);
    addSymbolElement.id = "addSymbol";
    addSymbolElement.setAttribute("class", "addSymbol");
    document.body.appendChild(addSymbolElement);
    //get 2nd random number
    window.num2 = getRandomNumber(0, 100);
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
    window.option1 = getRandomNumber(0, 100);
    window.option2 = getRandomNumber(0, 100);
    //perform addition operation and store value in sum
    window.sum = num1 + num2;
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = sum;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, sum];
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
  //This function generates intermediate level addition questions
  window.additionIntermediateQuestions = function()
  {
    document.body.innerHTML = "";
    //write "addition game"
    window.additionElement = document.createElement("p");
    window.node = document.createTextNode("Addition Game");
    additionElement.appendChild(node);
    additionElement.setAttribute("class", "add");
    document.body.appendChild(additionElement);
    //get 1st random number
    window.num1 = getRandomNumber(100, 300);
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display + symbol
    window.addSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("+");
    addSymbolElement.appendChild(node1);
    addSymbolElement.setAttribute("class", "addSymbol");
    document.body.appendChild(addSymbolElement);
    //get 2nd random number
    window.num2 = getRandomNumber(100, 300);
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = num2;
    secondNumberElement.setAttribute("class", "Num2");
    document.body.appendChild(secondNumberElement);
    //display = symbol
    window.equalSymbolElement = document.createElement("p");
    window.node2 = document.createTextNode("=");
    equalSymbolElement.appendChild(node2);
    equalSymbolElement.setAttribute("class", "equalSymbol");
    document.body.appendChild(equalSymbolElement);
    //get 2 random numbers to be displayed in the option box
    window.option1 = getRandomNumber(100, 300);
    window.option2 = getRandomNumber(100, 300);
    //perform addition operation and store value in sum
    window.sum = num1 + num2;
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = sum;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, sum];
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
  window.additionDifficultQuestions = function()
  {
    document.body.innerHTML = "";
    //write "addition game"
    window.additionElement = document.createElement("p");
    window.node = document.createTextNode("Addition Game");
    additionElement.appendChild(node);
    additionElement.setAttribute("class", "add");
    document.body.appendChild(additionElement);
    //get 1st random number
    window.num1 = getRandomNumber(300, 500);
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = num1;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display + symbol
    window.addSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("+");
    addSymbolElement.appendChild(node1);
    addSymbolElement.setAttribute("class", "addSymbol");
    document.body.appendChild(addSymbolElement);
    //get 2nd random number
    window.num2 = getRandomNumber(300, 500);
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = num2;
    secondNumberElement.setAttribute("class", "Num2");
    document.body.appendChild(secondNumberElement);
    //display = symbol
    window.equalSymbolElement = document.createElement("p");
    window.node2 = document.createTextNode("=");
    equalSymbolElement.appendChild(node2);
    equalSymbolElement.setAttribute("class", "equalSymbol");
    document.body.appendChild(equalSymbolElement);
    //get 2 random numbers to be displayed in the option box
    window.option1 = getRandomNumber(300, 500);
    window.option2 = getRandomNumber(300, 500);
    //perform addition operation and store value in sum
    window.sum = num1 + num2;
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = sum;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, sum];
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
