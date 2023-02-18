document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const rhombusDiagonal1 = getInputValue('rhombus-diagonal-1');
    const rhombusDiagonal2 = getInputValue('rhombus-diagonal-2');
    
    const checkRhombusDiagonal1 = Number.isInteger(rhombusDiagonal1);
    const checkRhombusDiagonal2 = Number.isInteger(rhombusDiagonal2);
    
    if(checkRhombusDiagonal1 && checkRhombusDiagonal2){
        const rhombusArea = areaCalculationTriangleRhombusPentagon(rhombusDiagonal1, rhombusDiagonal2);
        let rhombus = " Rhombus ";
        
        showArea(rhombusArea, rhombus);
    }
});

document.getElementById('random-rhombus').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});