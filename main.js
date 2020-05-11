randomQuoteUrl = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quote-display');
const quoteInputElement = document.getElementById('quote-input');
const getTimer = document.getElementById('timer');
const winningMessageElement = document.getElementById('winningMessage')
const winningSpan = document.querySelectorAll('span');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

quoteInputElement.addEventListener('input', () => {
	const arrayQuote = quoteDisplayElement.querySelectorAll('span')
	const arrayValue = quoteInputElement.value.split('')
	let correct = true;
	arrayQuote.forEach((characterSpan, index) => {
		const character = arrayValue[index]
		
		if (character == null) {
			characterSpan.classList.remove('correct')
			characterSpan.classList.remove('incorrect')
			correct = false;
		} else if (character === characterSpan.innerText) {
			characterSpan.classList.add('correct')
			characterSpan.classList.remove('incorrect')
			
		} else {
			characterSpan.classList.remove('correct')
			characterSpan.classList.add('incorrect')
			correct = false;
		}

		
	});
	
	if (correct) {
		winningMessageTextElement.innerText = `Time: ${getTimerTime()}s`
		winningMessageElement.classList.add('show');
		getTimer.innerText = 0;
		restartButton.addEventListener('click', () => {
			startTimer();
			winningMessageElement.classList.remove('show');

			getAlphabet();
			document.getElementById("quote-input").focus();
		})

	}
});



function getAlphabet() {
	const quote = 'abcdefghijklmnopqrstuvwxyz';
	console.log(quote.split(''));
	quoteDisplayElement.innerHTML = '';
	quote.split('').forEach((character) => {
	
	const characterSpan = document.createElement('span')
	quoteDisplayElement.appendChild(characterSpan)
	characterSpan.innerText = character;
	//code to initialize correct(green)/incorrect(red)
	// characterSpan.classList.add('incorrect');
	});
	quoteInputElement.value = null;
	startTimer();
};

let startTime;
 function startTimer() {
	 getTimer.innerText = 0;
	 startTime = new Date();
	 setInterval(() => {
		getTimer.innerText = getTimerTime();
	 }, 100)
 }
 
 function getTimerTime() {
	 return (Math.round(((new Date() - startTime) / 1000) * 10) / 10).toFixed(1);
 }
 
getAlphabet();