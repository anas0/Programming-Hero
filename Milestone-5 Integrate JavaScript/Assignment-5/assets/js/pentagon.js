document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const pentagonPerimeter = getInputValue('pentagon-perimeter');
    const pentagonBase = getInputValue('pentagon-base');
    
    const checkPentagonPerimeter = Number.isInteger(pentagonPerimeter);
    const checkPentagonBase = Number.isInteger(pentagonBase);
    
    if(checkPentagonPerimeter && checkPentagonBase){
        const pentagonArea = areaCalculationTriangleRhombusPentagon(pentagonPerimeter, pentagonBase);
        let pentagon = " Pentagon ";
        
        showArea(pentagonArea, pentagon);
    }
});

document.getElementById('random-pentagon').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});