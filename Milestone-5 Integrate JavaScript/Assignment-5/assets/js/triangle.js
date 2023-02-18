document.getElementById('triangle-calculate').addEventListener('click', function(){
    const triangleBase = getInputValue('triangle-base');
    const triangleHeight = getInputValue('triangle-height');

    const checkTriangleBase = Number.isInteger(triangleBase);
    const checkTriangleHeight = Number.isInteger(triangleHeight);
    
    if(checkTriangleBase && checkTriangleHeight){
        const triangleArea = areaCalculationTriangleRhombusPentagon(triangleBase, triangleHeight);
        let triangle = " Triangle ";
        
        showArea(triangleArea, triangle);
    } 
    
});

document.getElementById('random-triangle').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});