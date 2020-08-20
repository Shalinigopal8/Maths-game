//create 4 buttons with different operation names on it
window.createButton = function()
{
  document.body.innerHTML = "";
  for(var index=0;index<operations.length;index++)
  {
    window.operationButtonElement = document.createElement("button");
    window.node = document.createTextNode(operations[index]);
    operationButtonElement.appendChild(node);
    operationButtonElement.id = operations[index];
    document.body.appendChild(operationButtonElement);
    operationButtonElement.onclick = gameLevel;
  }
  //function to create 3 buttons with different game levels(basic, intermediate, difficult) on it
  function gameLevel()
  {
    //operationId is used to store the operation button which is clicked i.e, event occurred
    window.operationId = event.target.id;
    document.body.innerHTML = "";
    for(var level=0;level<gameLevels.length;level++)
    {
      window.levelButtonElement = document.createElement("button");
      window.node = document.createTextNode(gameLevels[level]);
      levelButtonElement.appendChild(node);
      levelButtonElement.id = gameLevels[level];
      document.body.appendChild(levelButtonElement);
      levelButtonElement.onclick = mathOperation;
    }
  }

}
