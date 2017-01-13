var element= document.getElementById("cuadrado");
element.style.backgroundColor="rgb(36, 23, 208)";
element.style.width='200px';

//element.style.backgroundColor="yellow";
//
var newElement= document.createElement("div");
document.body.appendChild(newElement);

//newElement.className = "div-rose";

newElement.style.backgroundColor="rgb(139, 12, 96)";
newElement.style.width='100px';
newElement.style.height='100px';


var circleElement= document.createElement("div");
document.body.appendChild(circleElement);

circleElement.id = "circulo";
circleElement.style.padding ="4em";
circleElement.innerHTML = "circulo";
circleElement.innerHTML = circleElement.innerHTML + "Hola";


var link = document.getElementById('colorLink');
link.addEventListener("click", function() {
    element.style.backgroundColor="rgb(34, 167, 103)";
    newElement.style.backgroundColor="rgb(235, 162, 20)";
    circleElement.style.backgroundColor="rgb(55, 208, 180)";

});
var linkC = document.getElementById ('circulo');
linkC.addEventListener("click", function(){
    circleElement.style.width='300px';
    circleElement.style.height='300px';

});
