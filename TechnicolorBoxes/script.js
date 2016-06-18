var color = false;

var valueGenerator = function(){
    var colorArray = [];
    colorArray[0] = Math.floor(Math.random() * 256);
    colorArray[1] = Math.floor(Math.random() * 256);
    colorArray[2] = Math.floor(Math.random() * 256);
    return colorArray;
};

var classRemover = function() {
    if (color != false) {
       $("#"+color).removeClass("selected"); 
    }
    else {
        $("#original").removeClass("selected");
    }
};

$(".box").mouseenter(function(){
    var newColorArray = valueGenerator();
    if (color === "blue") {
      $(this).css("background-color", 'rgb(0,0, '+newColorArray[2]+')');  
    }
     else if (color === "red") {
      $(this).css("background-color", 'rgb('+newColorArray[0]+', 0,0)');  
    }
     else if (color === "green") {
      $(this).css("background-color", 'rgb(0,'+newColorArray[1]+', 0)');  
    }
    else {
    $(this).css("background-color", 'rgb('+newColorArray[0]+', '+newColorArray[1]+', '+newColorArray[2]+')');
    }
});

$(".button").click(function(){
    classRemover();
    if (this.id != false) {
        color = this.id;
    }
    else {
        color = false;
    }
    $(this).addClass("selected")
});