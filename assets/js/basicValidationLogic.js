function validateFormFilled() {
    let inputsToBeValidated = document.querySelectorAll(".input");
    const numberOfInputsToBeValidated = inputsToBeValidated.length;
    let numberOfFilledInputs = 0;
    inputsToBeValidated.forEach(input => { if (input.value) numberOfFilledInputs++; });
    const allRequiredInputsAreFilled = numberOfFilledInputs === numberOfInputsToBeValidated;
    if (allRequiredInputsAreFilled) {
        document.getElementById('mybtnsubmit').classList.remove("disabled");
        return;
    }
    console.log('validating...')
    document.getElementById('mybtnsubmit').classList.add("disabled");

}

document.querySelectorAll(".input").forEach(input => input.addEventListener('keyup', validateFormFilled));