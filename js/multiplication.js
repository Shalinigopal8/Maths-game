//This function generates basic level multiplication questions
window.multiplicationBasicQuestions = function()
{
  document.body.innerHTML = "";
  //write "multiplication game"
  window.multiplicationElement = document.createElement("p");
  window.node = document.createTextNode("Multiplication Game");
  multiplicationElement.appendChild(node);
  multiplicationElement.setAttribute("class", "product");
  document.body.appendChild(multiplicationElement);
  //get two random numbers
  window.num1 = getRandomNumber(0, 15);
  window.num2 = getRandomNumber(0, 15);
  //box to display first number
  window.firstNumberElement = document.createElement("div");
  firstNumberElement.innerHTML = num1;
  firstNumberElement.setAttribute("class", "Num1");
  document.body.appendChild(firstNumberElement);
  //display * symbol
  window.productSymbolElement = document.createElement("p");
  window.node1 = document.createTextNode("*");
  productSymbolElement.appendChild(node1);
  productSymbolElement.id = "productSymbol";
  productSymbolElement.setAttribute("class", "productSymbol");
  document.body.appendChild(productSymbolElement);
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
  window.option1 = getRandomNumber(0, 250);
  window.option2 = getRandomNumber(0, 250);
  //perform multiplication operation and store value in product
  window.product = num1 * num2;
  //create box to enter the answer
  window.resultElement = document.createElement("div");
  resultElement.setAttribute("class", "result");
  resultElement.id = "result";
  resultElement.mybox = product;
  resultElement.ondrop = CreateOptionDropFunction(resultElement);
  resultElement.ondragover= allowOptionDrop;
  document.body.appendChild(resultElement);
  //create an array to store the options
  window.options = [option1, option2, product];
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
//This function generates intermediate level multiplication questions
window.multiplicationIntermediateQuestions = function()
{
  document.body.innerHTML = "";
  //write "multiplication game"
  window.multiplicationElement = document.createElement("p");
  window.node = document.createTextNode("Multiplication Game");
  multiplicationElement.appendChild(node);
  multiplicationElement.setAttribute("class", "product");
  document.body.appendChild(multiplicationElement);
  //get two random numbers
  window.num1 = getRandomNumber(10, 50);
  window.num2 = getRandomNumber(10, 50);
  //box to display first number
  window.firstNumberElement = document.createElement("div");
  firstNumberElement.innerHTML = num1;
  firstNumberElement.setAttribute("class", "Num1");
  document.body.appendChild(firstNumberElement);
  //display * symbol
  window.productSymbolElement = document.createElement("p");
  window.node1 = document.createTextNode("*");
  productSymbolElement.appendChild(node1);
  productSymbolElement.id = "productSymbol";
  productSymbolElement.setAttribute("class", "productSymbol");
  document.body.appendChild(productSymbolElement);
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
  window.option1 = getRandomNumber(100, 2500);
  window.option2 = getRandomNumber(100, 2500);
  //perform multiplication operation and store value in product
  window.product = num1 * num2;
  //create box to enter the answer
  window.resultElement = document.createElement("div");
  resultElement.setAttribute("class", "result");
  resultElement.id = "result";
  resultElement.mybox = product;
  resultElement.ondrop = CreateOptionDropFunction(resultElement);
  resultElement.ondragover= allowOptionDrop;
  document.body.appendChild(resultElement);
  //create an array to store the options
  window.options = [option1, option2, product];
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
//This function generates difficult level multiplication questions
window.multiplicationDifficultQuestions = function()
{
  document.body.innerHTML = "";
  //write "multiplication game"
  window.multiplicationElement = document.createElement("p");
  window.node = document.createTextNode("Multiplication Game");
  multiplicationElement.appendChild(node);
  multiplicationElement.setAttribute("class", "product");
  document.body.appendChild(multiplicationElement);
  //get two random numbers
  window.num1 = getRandomNumber(20, 60);
  window.num2 = getRandomNumber(20, 60);
  //box to display first number
  window.firstNumberElement = document.createElement("div");
  firstNumberElement.innerHTML = num1;
  firstNumberElement.setAttribute("class", "Num1");
  document.body.appendChild(firstNumberElement);
  //display * symbol
  window.productSymbolElement = document.createElement("p");
  window.node1 = document.createTextNode("*");
  productSymbolElement.appendChild(node1);
  productSymbolElement.id = "productSymbol";
  productSymbolElement.setAttribute("class", "productSymbol");
  document.body.appendChild(productSymbolElement);
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
  window.option1 = getRandomNumber(100, 2500);
  window.option2 = getRandomNumber(100, 2500);
  //perform multiplication operation and store value in product
  window.product = num1 * num2;
  //create box to enter the answer
  window.resultElement = document.createElement("div");
  resultElement.setAttribute("class", "result");
  resultElement.id = "result";
  resultElement.mybox = product;
  resultElement.ondrop = CreateOptionDropFunction(resultElement);
  resultElement.ondragover= allowOptionDrop;
  document.body.appendChild(resultElement);
  //create an array to store the options
  window.options = [option1, option2, product];
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
