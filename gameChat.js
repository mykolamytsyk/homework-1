<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Гра "Корови і Бики"</title>
  <style>
    input {
      width: 30px;
      text-align: center;
      margin-right: 5px;
    }

    button {
      margin-top: 10px;
    }
  </style>
</head>
<body>

<h1>Гра "Корови і Бики"</h1>
<p>Введіть чотиризначне число:</p>

<input type="text" id="guessInput1">
<input type="text" id="guessInput2">
<input type="text" id="guessInput3">
<input type="text" id="guessInput4">

<button onclick="checkGuess()">Перевірити</button>

<script>
let secretNumber;

function generateSecretNumber() {
  secretNumber = '';
  while (secretNumber.length < 4) {
    const digit = Math.floor(Math.random() * 10);
    if (!secretNumber.includes(digit.toString())) {
      secretNumber += digit;
    }
  }
}

function checkGuess() {
  const guess1 = document.getElementById('guessInput1').value;
  const guess2 = document.getElementById('guessInput2').value;
  const guess3 = document.getElementById('guessInput3').value;
  const guess4 = document.getElementById('guessInput4').value;

  const userGuess = guess1 + guess2 + guess3 + guess4;

  if (userGuess.length !== 4 || !/^\d+$/.test(userGuess)) {
    alert('Будь ласка, введіть чотиризначне число.');
    return;
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    const digit = userGuess[i];
    if (digit === secretNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(digit)) {
      cows++;
    }
  }

  if (bulls === 4) {
    alert('Вітаємо! Ви вгадали число!');
    generateSecretNumber();
  } else {
    alert(`Бики: ${bulls}, Корови: ${cows}`);
  }
}

// Генеруємо випадкове число при завантаженні сторінки
generateSecretNumber();
</script>

</body>
</html>
