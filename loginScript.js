let upperCase = [], lowerCase = [],numeric = [],special = [];

    for (let i = 0; i < account.password.length; i++) {
      let letter = account.password[i];

      if (letter.toUpperCase() === letter &&letter !== letter.toLowerCase() &&isNaN(letter) === true) {
        upperCase.push(letter);
      } else if (letter.toLowerCase() === letter &&letter !== letter.toUpperCase() && isNaN(letter) === true) {
        lowerCase.push(letter);
      } else if (isNaN(letter) === false) {
        numeric.push(letter);
      } else {
        special.push(letter);
      }
    }
    if (upperCase.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-Uppercase";
    }
    if (lowerCase.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-Lowercase";
    }
    if (numeric.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-Numeric";
    }
    if (special.length === 0) {
      passwordMsg.textContent ="➡️should contain atleast one-Special_Character";
    }
    if (upperCase.length === 0 && lowerCase.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-E, one-e";
    }
    if (upperCase.length === 0 && numeric.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-E, one-3";
    }
    if (upperCase.length === 0 && special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-F, one-!";
    }
    if (lowerCase.length === 0 && numeric.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-m, one-9";
    }
    if (lowerCase.length === 0 && special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-u, one-%";
    }
    if (numeric.length === 0 && special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-4, one-&";
    }
    if (upperCase.length === 0 &&lowerCase.length === 0 &&numeric.length === 0
    ) {
      passwordMsg.textContent = "➡️should contain atleast one-A, one-a, one-1";
    }
    if (upperCase.length === 0 && lowerCase.length === 0 &&special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-Z, one-z, one-#";
    }
    if (upperCase.length === 0 &&numeric.length === 0 && special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-X, one-5, one-$";
    }
    if (lowerCase.length === 0 &&numeric.length === 0 &&special.length === 0) {
      passwordMsg.textContent = "➡️should contain atleast one-x, one-7, one-@";
    }
    if (account.password !== account.confirmPassword) {
      passwordMsg.textContent = "➡️password not match";
    }