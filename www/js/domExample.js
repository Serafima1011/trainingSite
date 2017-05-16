function handleClick(event){
  event.stopPropagation();

  var node = event.target;
  var thisPath = node.nodeName;

  while(node.parentNode){
    node = node.parentNode;
    thisPath = node.nodeName + ">" + thisPath;
  }

  console.log(thisPath);
}

function attachHandler(node){
  if(node==null) return;

  node.onclick = handleClick;

  for(var i=0; i<node.childNodes.length; i++){
    attachHandler(node.childNodes[i]);
  }
}

function init(){
  attachHandler(document.getElementsByTagName("body")[0]);
}
