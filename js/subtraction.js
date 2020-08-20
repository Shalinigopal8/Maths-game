//This function generates basic level subtraction questions
window.subtractionBasicQuestions = function()
{
    document.body.innerHTML = "";
    //write "subtraction game"
    window.subtractionElement = document.createElement("p");
    window.node = document.createTextNode("Subtraction Game");
    subtractionElement.appendChild(node);
    subtractionElement.setAttribute("class", "sub");
    document.body.appendChild(subtractionElement);
    //get two random numbers
    window.num1 = getRandomNumber(0, 100);
    window.num2 = getRandomNumber(0, 100);
    //maxNum stores the greater number among num1 and num2
    window.maxNum = Math.max(num1,num2);
    //minNum stores the smaller number among num1 and num2
    window.minNum = Math.min(num1,num2);
    //box to display first number
    window.firstNumberElement = document.createElement("div");
    firstNumberElement.innerHTML = maxNum;
    firstNumberElement.setAttribute("class", "Num1");
    document.body.appendChild(firstNumberElement);
    //display - symbol
    window.subSymbolElement = document.createElement("p");
    window.node1 = document.createTextNode("-");
    subSymbolElement.appendChild(node1);
    subSymbolElement.id = "subSymbol";
    subSymbolElement.setAttribute("class", "subSymbol");
    document.body.appendChild(subSymbolElement);
    //box to display second number
    window.secondNumberElement = document.createElement("div");
    secondNumberElement.innerHTML = minNum;
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
    //perform subtraction operation and store value in difference
    window.difference = maxNum - minNum;
    //create box to enter the answer
    window.resultElement = document.createElement("div");
    resultElement.setAttribute("class", "result");
    resultElement.id = "result";
    resultElement.mybox = difference;
    resultElement.ondrop = CreateOptionDropFunction(resultElement);
    resultElement.ondragover= allowOptionDrop;
    document.body.appendChild(resultElement);
    //create an array to store the options
    window.options = [option1, option2, difference];
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
  //This function generates intermediate level subtraction questions
  window.subtractionIntermediateQuestions = function()
  {
      document.body.innerHTML = "";
      //write "subtraction game"
      window.subtractionElement = document.createElement("p");
      window.node = document.createTextNode("Subtraction Game");
      subtractionElement.appendChild(node);
      subtractionElement.setAttribute("class", "sub");
      document.body.appendChild(subtractionElement);
      //get two random numbers
      window.num1 = getRandomNumber(100, 300);
      window.num2 = getRandomNumber(100, 300);
      //maxNum stores the greater number among num1 and num2
      window.maxNum = Math.max(num1,num2);
      //minNum stores the smaller number among num1 and num2
      window.minNum = Math.min(num1,num2);
      //box to display first number
      window.firstNumberElement = document.createElement("div");
      firstNumberElement.innerHTML = maxNum;
      firstNumberElement.setAttribute("class", "Num1");
      document.body.appendChild(firstNumberElement);
      //display - symbol
      window.subSymbolElement = document.createElement("p");
      window.node1 = document.createTextNode("-");
      subSymbolElement.appendChild(node1);
      subSymbolElement.id = "subSymbol";
      subSymbolElement.setAttribute("class", "subSymbol");
      document.body.appendChild(subSymbolElement);
      //box to display second number
      window.secondNumberElement = document.createElement("div");
      secondNumberElement.innerHTML = minNum;
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
      window.option1 = getRandomNumber(100, 300);
      window.option2 = getRandomNumber(100, 300);
      //perform subtraction operation and store value in difference
      window.difference = maxNum - minNum;
      //create box to enter the answer
      window.resultElement = document.createElement("div");
      resultElement.setAttribute("class", "result");
      resultElement.id = "result";
      resultElement.mybox = difference;
      resultElement.ondrop = CreateOptionDropFunction(resultElement);
      resultElement.ondragover= allowOptionDrop;
      document.body.appendChild(resultElement);
      //create an array to store the options
      window.options = [option1, option2, difference];
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
    //This function generates difficult level subtraction questions
    window.subtractionDifficultQuestions = function()
    {
        document.body.innerHTML = "";
        //write "subtraction game"
        window.subtractionElement = document.createElement("p");
        window.node = document.createTextNode("Subtraction Game");
        subtractionElement.appendChild(node);
        subtractionElement.setAttribute("class", "sub");
        document.body.appendChild(subtractionElement);
        //get two random numbers
        window.num1 = getRandomNumber(300, 500);
        window.num2 = getRandomNumber(300, 500);
        //maxNum stores the greater number among num1 and num2
        window.maxNum = Math.max(num1,num2);
        //minNum stores the smaller number among num1 and num2
        window.minNum = Math.min(num1,num2);
        //box to display first number
        window.firstNumberElement = document.createElement("div");
        firstNumberElement.innerHTML = maxNum;
        firstNumberElement.setAttribute("class", "Num1");
        document.body.appendChild(firstNumberElement);
        //display - symbol
        window.subSymbolElement = document.createElement("p");
        window.node1 = document.createTextNode("-");
        subSymbolElement.appendChild(node1);
        subSymbolElement.id = "subSymbol";
        subSymbolElement.setAttribute("class", "subSymbol");
        document.body.appendChild(subSymbolElement);
        //box to display second number
        window.secondNumberElement = document.createElement("div");
        secondNumberElement.innerHTML = minNum;
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
        window.option1 = getRandomNumber(300, 500);
        window.option2 = getRandomNumber(300, 500);
        //perform subtraction operation and store value in difference
        window.difference = maxNum - minNum;
        //create box to enter the answer
        window.resultElement = document.createElement("div");
        resultElement.setAttribute("class", "result");
        resultElement.id = "result";
        resultElement.mybox = difference;
        resultElement.ondrop = CreateOptionDropFunction(resultElement);
        resultElement.ondragover= allowOptionDrop;
        document.body.appendChild(resultElement);
        //create an array to store the options
        window.options = [option1, option2, difference];
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
