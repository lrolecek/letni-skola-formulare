console.log('JavaScript funguje');



let formular = document.querySelector('#formular')
formular.addEventListener('submit', zpracujFormular)


function zpracujFormular(event) {
	event.preventDefault()

	console.log('zpracovavam')

	let jmeno = document.querySelector('#jmeno').value
	let prijmeni = document.querySelector('#prijmeni').value
	console.log(jmeno + ' ' + prijmeni)

	let datum = document.querySelector('#datum').value
	console.log(datum)

	let barva = document.querySelector('#barva').value
	console.log(barva)

	let mesto = document.querySelector('#mesto').value
	console.log(mesto)

	let souhlas = document.querySelector('#souhlas').checked
	if (souhlas == true) {
		console.log('Zákoš souhlasí, pošleme mu spam')
	} else {
		console.log('Tenhle nic nechce posílat :(')
	}

}


let barvicka = document.querySelector('#barva')
barvicka.addEventListener('change', zmenBarvu)

function zmenBarvu() {
	let barva = document.querySelector('#barva').value
	document.querySelector('body').style.backgroundColor = barva;
}