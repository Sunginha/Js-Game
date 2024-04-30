  //let title = document.querySelector('h1');
  //title.innerHTML = 'Among us Guesser';
  let listOfRandomNumbers = [];
  const deadline = 3;
  let randomNumber = randomNumberGenerator();
  let attempts = 0;

  //let paragraph = document.querySelector('p');
  //paragraph.innerHTML = `Choose a number between 1 and ${deadline}`;

  function screenText(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;    
  }

  function showOnScreen() {
  screenText('h1', 'Among us Guesser');
  screenText('p', 'Choose a number between 1 and 10');
  }

  showOnScreen();

  function verifyGuess() 
  {
    let guess = document.querySelector('input').value;
    if (guess == randomNumber)
    {
      screenText('h1', 'Right Awnser!');
      let attemptWord = attempts > 1 ? 'attempts' : 'attempt';
      let messageAttempts = `You discovered the secret number in ${attempts} ${attemptWord}!!`;
      screenText('p', messageAttempts);
      document.getElementById('restart').removeAttribute('disabled');
    } else {
      if (guess > randomNumber){
        screenText('p', 'Secret number is smaller');
      } else {
        screenText('p', 'Secret number is bigger');
      }
      attempts++;
      cleanField();
    }
  }

  verifyGuess()

  function randomNumberGenerator() {
    let choosedNumber = parseInt(Math.random() * deadline + 1);
    let amountOfElementsInTheList = listOfRandomNumbers.length;

    if (amountOfElementsInTheList == deadline) {
      listOfRandomNumbers = [ ]
    }
    
    if (listOfRandomNumbers.includes(choosedNumber)) {
      return randomNumberGenerator();
    } else {
      listOfRandomNumbers.push(choosedNumber);
      console.log(parseInt(listOfRandomNumbers));
      return choosedNumber;
    }
  }

  function cleanField() {
  guess = document.querySelector('input');
  guess.value = '';

  }

  function restartGame() {
  randomNumber = randomNumberGenerator();
  cleanField();
  attempts = 1;
  showOnScreen();
  document.getElementById('restart').setAttribute('disabled', true);

  }