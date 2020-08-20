var currentDraggingObject = null;
var numberofQuestions = 0;
//allows drop
function allowOptionDrop(event)
{
  event.preventDefault();
}
//when an option element is dragged
function onOptionDragStart(event)
{
    currentDraggingObject = event.target;
    //dataTranfer.setData() method sets the data type and value of the dragged data.
    event.dataTransfer.setData("text", event.target.id);
}
//performs drop operation
function CreateOptionDropFunction(resultElement)
{
  return function()
  {
    if(currentDraggingObject == null) return;
    if(currentDraggingObject.mybox == resultElement.mybox)
    {
      resultElement.innerHTML = "";
      console.log("id=",currentDraggingObject.id);
      var draggingId = currentDraggingObject.id;
      document.getElementById(draggingId).classList.remove("options");
      document.getElementById(draggingId).classList.add("correctAnswer");
      resultElement.appendChild(currentDraggingObject);
      numberofQuestions++;
      window.paragraphElement = document.createElement("p");
      window.node = document.createTextNode("Score:"+numberofQuestions);
      paragraphElement.appendChild(node);
      paragraphElement.setAttribute("class", "score");
      document.body.appendChild(paragraphElement);
      window.nextButtonElement = document.createElement("button");
      window.node = document.createTextNode("Next");
      nextButtonElement.appendChild(node);
      nextButtonElement.id = "next";
      document.body.appendChild(nextButtonElement);
      nextButtonElement.onclick = nextQuestionGeneration;
    }
    else
    {
      resultElement.innerHTML = "X";
    }
    event.preventDefault();
  }
}

//perform different mathematical operations
window.mathOperation = function()
{
  //levelId is used to store the level button which is clicked i.e, event occurred
  window.levelId = event.target.id;

  if(operationId=="Addition" && levelId=="Basic")
  {
    additionBasicQuestions();
  }
  else if(operationId=="Addition" && levelId=="Intermediate")
  {
    additionIntermediateQuestions();
  }
  else if(operationId=="Addition" && levelId=="Difficult")
  {
    additionDifficultQuestions();
  }
  else if(operationId=="Subtraction" && levelId=="Basic")
  {
    subtractionBasicQuestions();
  }
  else if(operationId=="Subtraction" && levelId=="Intermediate")
  {
    subtractionIntermediateQuestions();
  }
  else if(operationId=="Subtraction" && levelId=="Difficult")
  {
    subtractionDifficultQuestions();
  }
  else if(operationId=="Multiplication" && levelId=="Basic")
  {
    multiplicationBasicQuestions();
  }
  else if(operationId=="Multiplication" && levelId=="Intermediate")
  {
    multiplicationIntermediateQuestions();
  }
  else if(operationId=="Multiplication" && levelId=="Difficult")
  {
    multiplicationDifficultQuestions();
  }
  else if(operationId=="Division" && levelId=="Basic")
  {
    divisionBasicQuestions();
  }
  else if(operationId=="Division" && levelId=="Intermediate")
  {
    divisionIntermediateQuestions();
  }
  else if(operationId=="Division" && levelId=="Difficult")
  {
    divisionDifficultQuestions();
  }
}
//This function is used to generate the next question
window.nextQuestionGeneration = function()
{
  window.nextButtonId = event.target.id;
  if(operationId=="Addition" && levelId=="Basic")
    additionBasicQuestions();
  else if(operationId=="Addition" && levelId=="Intermediate")
    additionIntermediateQuestions();
  else if(operationId=="Addition" && levelId=="Difficult")
    additionDifficultQuestions();
  else if(operationId=="Subtraction" && levelId=="Basic")
    subtractionBasicQuestions();
  else if(operationId=="Subtraction" && levelId=="Intermediate")
    subtractionIntermediateQuestions();
  else if(operationId=="Subtraction" && levelId=="Difficult")
    subtractionDifficultQuestions();
  else if(operationId=="Multiplication" && levelId=="Basic")
    multiplicationBasicQuestions();
  else if(operationId=="Multiplication" && levelId=="Intermediate")
    multiplicationIntermediateQuestions();
  else if(operationId=="Multiplication" && levelId=="Difficult")
    multiplicationDifficultQuestions();
  else if(operationId=="Division" && levelId=="Basic")
    divisionBasicQuestions();
  else if(operationId=="Division" && levelId=="Intermediate")
    divisionIntermediateQuestions();
  else if(operationId=="Division" && levelId=="Difficult")
      divisionDifficultQuestions();
  if(numberofQuestions==5 && levelId=="Basic")
    levelCompleted();
  else if(numberofQuestions==10 && levelId=="Intermediate")
    levelCompleted();
  else if(numberofQuestions==15 && levelId=="Difficult")
    levelCompleted();
}
//This function contains the data to be displayed when a level is completed
window.levelCompleted = function()
{
  numberofQuestions=0;
  document.body.innerHTML ="";
  //write "Congratulations!! Level Completed"
  window.levelCompleteElement = document.createElement("p");
  window.node = document.createTextNode("Congratulations!! Level Completed");
  levelCompleteElement.appendChild(node);
  levelCompleteElement.id ="levelComplete";
  document.body.appendChild(levelCompleteElement);
  //creates "back to menu" button
  window.backButtonElement = document.createElement("button");
  window.node = document.createTextNode("Back to Menu");
  backButtonElement.appendChild(node);
  backButtonElement.id = "back";
  document.body.appendChild(backButtonElement);
  backButtonElement.onclick =createButton;
  //creates balloon image
  window.balloonImageElement= document.createElement("img");
  balloonImageElement.setAttribute("src", "images/balloon.png");
  balloonImageElement.setAttribute("alt", "balloon");
  balloonImageElement.setAttribute("class", "win");
  document.body.appendChild(balloonImageElement);
  //creates balloons image
  window.balloonsImageElement= document.createElement("img");
  balloonsImageElement.setAttribute("src", "images/balloons.png");
  balloonsImageElement.setAttribute("alt", "balloon");
  balloonsImageElement.setAttribute("class", "win1");
  document.body.appendChild(balloonsImageElement);
  window.giftImageElement= document.createElement("img");
}
