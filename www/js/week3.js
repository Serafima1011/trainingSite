function triger(){
  var body = document.getElementById("this_body");
  var color_list = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  var topPosition = 50, leftPosition = 20;
  var width = 300, height = 300;

  while(width > 50){
    var div = document.createElement("div");
    div.style.background = color_list[Math.floor(Math.random()*7)];
    div.style.top = topPosition + "px";
    div.style.left = leftPosition + "px";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.position = "absolute";
    body.appendChild(div);

    topPosition += 10;
    leftPosition += 10;
    width -= 20;
    height -= 20;
  }
}

var countOfSmiles = 0;
var leftSide = document.getElementById("left_side");
var body = document.getElementById("this_body");
var rightSide = document.getElementById("right_side");


function generateNewLevel(){
  countOfSmiles += 5;

  generateFacesOnLeftSide(countOfSmiles);
  copyFacesFromLeftToRight();

  if(leftSide != null)
    leftSide.lastChild.onclick = onAnswerClick;
}

function onAnswerClick(event){
  event.stopPropagation();
  generateNewLevel();
}

function gameOver(){
    alert("Game Over!");
    body.onclick = null;
    leftSide.lastChild.onclick = null;
}

function generateFacesOnLeftSide(countOfSmiles){
  var windowsWidth = 600, windowsHeight = 600;
  var picturesSize = 100;

  removeAllChild(leftSide);
  for(var i=0; i<countOfSmiles; i++){
    var topPosition = Math.floor(Math.random()*(windowsWidth-picturesSize+1));
    var leftPosition = Math.floor(Math.random()*(windowsHeight-picturesSize+1));

    var img = document.createElement("img");
    img.src = "..//sourse/images/smile.png";
    img.style.top = topPosition;
    img.style.left = leftPosition;

    if(leftSide != null)
      leftSide.appendChild(img);
  }
}

function removeAllChild(parent){
  if (parent == null) return null;

  while(parent.firstChild)
    parent.removeChild(parent.firstChild);
}

function copyFacesFromLeftToRight(){
  removeAllChild(rightSide);

  if(leftSide == null)
    return null;

  var smilesWithoutLast = leftSide.cloneNode(true);
  smilesWithoutLast.removeChild(smilesWithoutLast.lastChild);
  rightSide.appendChild(smilesWithoutLast);

}
