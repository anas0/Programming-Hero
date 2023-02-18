let i = 0;
// Show Area 
function showArea(area, areaOf){
    let showTable = document.getElementById('show-table');

    i = i + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${i}</td>
        <td>${areaOf}</td>
        <td>${area}</td>
        <td>cm<sup>2</sup></button></td>
        <td><button id="show-button" type="button" class="btn btn-primary btn-sm">Covert to m<sup>2</sup></button></td>
    `;

    showTable.appendChild(tr);
}

// Area (A) = 0.5 X b X h
function areaCalculationTriangleRhombusPentagon(height, width){
    const areaCalculation = 0.5 * height * width;
    const checkNumber = Number.isInteger(areaCalculation);
    
    if(checkNumber){
        return areaCalculation;
    }else{
        return areaCalculation.toFixed(2);
    }
}

// Area (A) = w X l
function areaCalculationRectangleParallelogram(height, width){
    const areaCalculation = height * width;
    const checkNumber = Number.isInteger(areaCalculation);
    
    if(checkNumber){
        return areaCalculation;
    }else{
        return areaCalculation.toFixed(2);
    }
}

// Area (A) = πab
function areaCalculationEllipse(majorRadius, minorRadius){
    const pi = 3.14;
    const areaCalculation = pi * majorRadius * minorRadius;
    const checkNumber = Number.isInteger(areaCalculation);
    
    if(checkNumber){
        return areaCalculation;
    }else{
        return areaCalculation.toFixed(2);
    }
}

// Get Input Value 
function getInputValue(inputField){
    const input =  document.getElementById(inputField);
    const valueString = input.value;
    const value = parseFloat(valueString);
    
    if(!isNaN(value) && value >= 0){
        return value;
    }else{
        alert("Please provide a valid position number.");
    }
}
