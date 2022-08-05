let information = {
    firstName: '',
    lastName: '',
    age: 18,
    ethnicity: '',
    gender: '',
    height: 0,
    location: '',
    maritalStatus: ''
  };
  
  function isInfoSet(infoKey, infoType, infoInput) {
    let isValid = false;
    switch (infoType) {
      case 'number':
        isValid = infoInput.trim() !== "" && !isNaN(infoInput.trim());
        if (isValid) {
          information[infoKey] = Number(infoInput.trim());
          return true;
        }
        return false;
      default:
        isValid = infoInput.trim() !== "";
        if (infoKey === "height") {
          isValid = infoInput.trim() !== "" && !isNaN(infoInput.trim());
          if (isValid) {
            information[infoKey] = Number(infoInput.trim());
            return true;
          }
          return false;
        }
        if (isValid) {
          information[infoKey] = infoInput.trim();
          return true;
        }
        return false;
    }
  }

  function thirstySingle() {
    const formInputs = document.getElementById("thirstySingle").elements;
    const isFirstNameValid = isInfoSet('firstName', formInputs['firstName'].type, formInputs['firstName'].value);
    document.getElementById("firstNameError").style.display = isFirstNameValid ? 'none' : 'block';
    const isLastNameValid = isInfoSet('lastName', formInputs['lastName'].type, formInputs['lastName'].value);
    document.getElementById("lastNameError").style.display = isLastNameValid ? 'none' : 'block';
    const isAgeValid = isInfoSet('age', formInputs['age'].type, formInputs['age'].value);
    document.getElementById("ageError").style.display = isAgeValid ? 'none' : 'block';
    const isEthnicityValid = isInfoSet('ethnicity', formInputs['ethnicity'].type, formInputs['ethnicity'].value);
    document.getElementById("ethnicityError").style.display = isEthnicityValid ? 'none' : 'block';
    const isHeightValid = isInfoSet('height', formInputs['height'].type, formInputs['height'].value);
    document.getElementById("heightError").style.display = isHeightValid ? 'none' : 'block';
    const isLocationValid = isInfoSet('location', formInputs['location'].type, formInputs['location'].value);
    document.getElementById("locationError").style.display = isLocationValid ? 'none' : 'block';
    let allValid = isFirstNameValid && isLastNameValid && isAgeValid && isEthnicityValid && isHeightValid && isLocationValid;
    document.getElementById("result").style.display = allValid ? 'block' : 'none';
    if (allValid) {
      document.getElementById("result").innerText = JSON.stringify(information);
    }
  }