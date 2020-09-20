const calcBtn = document.getElementById('calculate');

var billAmount;
var serviceQuality;
var numPeople;


calcBtn.addEventListener('click', function(e) {
	e.preventDefault();

	billAmount = document.querySelector('#bill-amount').value;
	serviceQuality = document.querySelector('#service-quality').options[document.querySelector('#service-quality').selectedIndex].value;
	numPeople = document.querySelector('#num-people').value;

	console.log('Bill Amount: ' + billAmount + '\nService Quality: ' + serviceQuality + '\nNumber of People: ' + numPeople);

	document.getElementById('output').innerText = '$' + Math.round((billAmount * serviceQuality / numPeople)*100)/100 + ' per person';
});