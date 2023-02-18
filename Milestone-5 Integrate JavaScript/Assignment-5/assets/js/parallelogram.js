document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const parallelogramBase = getInputValue('parallelogram-base');
    const parallelogramHeight = getInputValue('parallelogram-height');

    const checkParallelogramBase = Number.isInteger(parallelogramBase);
    const checkParallelogramHeight = Number.isInteger(parallelogramHeight);
    
    if(checkParallelogramBase && checkParallelogramHeight){
        const parallelogramArea = areaCalculationRectangleParallelogram(parallelogramBase, parallelogramHeight);
        let parallelogram = " Parallelogram ";
        
        showArea(parallelogramArea, parallelogram);
    }
});

document.getElementById('random-parallelogram').addEventListener('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = color;
});