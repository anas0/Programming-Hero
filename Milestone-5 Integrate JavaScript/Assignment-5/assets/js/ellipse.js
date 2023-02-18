document.getElementById('ellipse-calculate').addEventListener('click', function(){
    const ellipseMajorRadius = getInputValue('Ellipse-major-radius');
    const ellipseMinorRadius = getInputValue('Ellipse-minor-radius');
    
    const checkEllipseMajorRadius = Number.isInteger(ellipseMajorRadius);
    const checkEllipseMinorRadius = Number.isInteger(ellipseMinorRadius);
    
    if(checkEllipseMajorRadius && checkEllipseMinorRadius){
        const ellipseArea = areaCalculationEllipse(ellipseMajorRadius, ellipseMinorRadius);
        let ellipse = " Ellipse ";
        
        showArea(ellipseArea, ellipse);
    }
});

document.getElementById('random-ellipse').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});