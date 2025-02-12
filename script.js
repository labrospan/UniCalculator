function updateMode(){
    let calcType = document.getElementById("mode").value;
    let theoryInput = document.getElementById("theory_grd");
    let labInput = document.getElementById("lab_grd");
    let resultBox = document.getElementById("result");
    let resultText = document.getElementById("resultTxt");

    //Reset input fields and result box
    theoryInput.value = "";
    labInput.value = "";
    resultText.textContent  ="";
    resultBox.style.color = "black";

    // Enable -- Disable mode
    if(calcType === "theory"){
        theoryInput.disabled = true;
        labInput.disabled = false;
    }
    else if(calcType === "lab"){
        labInput.disabled = true;
        theoryInput.disabled = false;
    }
    else{
        theoryInput.disabled = true;
        labInput.disabled = true;
    }
}

function calculate(){
    let calcType = document.getElementById("mode").value;
    let theoryInput = document.getElementById("theory_grd");
    let labInput = document.getElementById("lab_grd");
    let theory_per = parseFloat(document.getElementById("theory_per").value) / 100;
    let lab_per = parseFloat(document.getElementById("lab_per").value) / 100;

    // Calculate Theory Grade
    if(calcType === 'theory' && labInput.value !== ""){
        let labGrade = parseFloat(labInput.value);
        let requiredTheory = (5 - (labGrade * lab_per)) / theory_per;

        document.getElementById("resultTxt").textContent = "Required Theory Grade: " + requiredTheory.toFixed(2);
    }
    // Calculate Lab Grade
    else if(calcType === "lab" && theoryInput.value !==""){
        let theoryGrade = parseFloat(theoryInput.value);
        let requiredLab = (5 - (theoryGrade * theory_per)) / lab_per;

        document.getElementById("resultTxt").textContent = "Required Lab Grade: " + requiredLab.toFixed(2);
    }
}