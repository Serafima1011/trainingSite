
function addNewButton(text) {
     var btn = document.createElement("BUTTON");
     var t = document.createTextNode(text);
     btn.appendChild(t);
     document.body.appendChild(btn);
}

function addStr(name, hobby){
  var table = document.getElementById("aboutMe");
  var row = table.insertRow(table.rows.length);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name;
  cell2.innerHTML = hobby;
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', "../js/aboutMe.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
    xobj.send(null);
 }


function load() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var data = JSON.parse(response);
     var information = data.Information;

     information.forEach(function(elem){
       addStr(elem.Name, elem.Hobby);
     });

  });
}

function checkName(){
  var name = document.getElementById('name');
  var nameValue = name.value;
  var nameError = document.getElementById('nameError');

  nameError.style.visibility = "hidden";

  if(/\d/.test(nameValue)) {
    // addElementAfter('p', 'incorrect name', name);
    nameError.style.visibility = "visible";
  }
}

function addElementAfter(newElementType, newElementText, elementBefore){
    var note = document.createElement(newElementType);
    note.style.color = 'red';
    note.innerHTML = newElementText;
    var parentDiv = elementBefore.parentNode;
    insertAfter(parentDiv, note, elementBefore);
}

function delElementAfter(){
  var elem = document.getElementById("name");
  el.nextElementSibling.remove();
  // var elem = document.getElementById("name");
}

function insertAfter(parent, node, referenceNode) {
  parent.insertBefore(node, referenceNode.nextSibling);
}


function changePhoto(event){
  var groupYourFace = document.getElementById("yourFace")

  var img = document.createElement("img")
  img.src = URL.createObjectURL(event.target.files[0])
  img.width = "150"
  img.height = "150"
  img.id = "preview"
  groupYourFace.appendChild(img)
}


function greatingUser() {
  fillName(prompt(getTimeOfDay() + "\n\n" + "What is your name?"));
}

function fillBirthday(){
  document.getElementById("birthday").value = getCurrentDate();
  var array = ["Cat", "Dog", "Mouse", "Cow"];
  array.splice(1, 0, "Spider");
  console.log(array);
}

function fillName(name){
  document.getElementById("name").value = name;
}

function getCurrentDate(){
  var currentDate = new Date();
  console.log(currentDate);
  var currentDay = currentDate.getDate();
  if(currentDay < 10) currentDay = "0" + currentDay;

  var currentMonth = currentDate.getMonth() + 1;
  if(currentMonth < 10) currentMonth = "0" + currentMonth;

  var currentYear = currentDate.getFullYear();
  return (currentYear + "-" + currentMonth + "-" + currentDay);
}

function getTimeOfDay(){
  var currentDate = new Date();
  var currentTime = currentDate.getHours();
  if(currentTime>=5 && currentTime<=12){
    return "Good morning";
  }
  else if(currentTime>12 && currentTime<=18) {
    return "Good afternoon";
  }
  else if(currentTime>18 && currentTime<=22){
    return "Good evening";
  }
  return "Good night";
}
