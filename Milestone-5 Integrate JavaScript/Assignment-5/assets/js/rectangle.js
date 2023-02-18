document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');
    
    const checkRectangleWidth = Number.isInteger(rectangleWidth);
    const checkRectangleLength = Number.isInteger(rectangleLength);
    
    if(checkRectangleWidth && checkRectangleLength){
        const rectangleArea = areaCalculationRectangleParallelogram(rectangleWidth, rectangleLength);
        let rectangle = " Rectangle ";
        
        showArea(rectangleArea, rectangle);
    }
});

document.getElementById('random-rectangle').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});