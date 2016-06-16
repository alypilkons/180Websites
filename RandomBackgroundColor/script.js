var button = document.getElementById("button");

var valueGenerator = function(){
    var colorArray = [];
    colorArray[0] = Math.floor(Math.random() * 256);
    colorArray[1] = Math.floor(Math.random() * 256);
    colorArray[2] = Math.floor(Math.random() * 256);
    return colorArray;
}

button.addEventListener("click", function(){
    var newColorArray = valueGenerator();
    document.body.style.backgroundColor = 'rgb('+newColorArray[0]+', '+newColorArray[1]+', '+newColorArray[2]+')'
});