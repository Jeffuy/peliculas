function precioGastadoRenta() {
	let valorPeliculas = parseInt(document.getElementById("cuanto").value);
	let cantidadPeliculas = parseInt(document.getElementById("cuantas").value);
	let resultado = document.getElementById("PrecioRenta");

	let valorTotal = valorPeliculas * cantidadPeliculas;

	if (isNaN(valorTotal) == true) {
		resultado.innerHTML = "Debes seleccionar la cantidad de películas y el precio"
	} else {
		resultado.innerHTML = "El precio total de renta es de $" + valorTotal
	}
	return valorTotal;

}

function precioGastadoSuscripciones() {
	let precioTotal = 0;

	let resultado = document.getElementById("PrecioStream");

	if (document.getElementById('Netflix').checked) {
		precioTotal += 6.99
	}
	if (document.getElementById('PrimeVideo').checked) {
		precioTotal += 4.99
	}
	if (document.getElementById('HBOMax').checked) {
		precioTotal += 8.99
	}
	if (document.getElementById('DisneyPlus').checked) {
		precioTotal += 5.99
	}

	resultado.innerHTML = "El precio total de tus suscripciones es de $" + precioTotal

	return precioTotal;

}

function comparar() {
	precioGastadoRenta()
	precioGastadoSuscripciones()

	let resultado = document.getElementById("Result");

	if (precioGastadoRenta() > precioGastadoSuscripciones()) {
		resultado.innerHTML = "Te conviene contratar las suscripciones"
	} else if (precioGastadoSuscripciones() > precioGastadoRenta()) {
		resultado.innerHTML = "Te conviene rentar películas"
	} else if (isNaN(precioGastadoRenta()) == true) {
		resultado.innerHTML = "Debes seleccionar la cantidad de películas y el precio"
	} else {
		resultado.innerHTML = "En ambas opciones gastarias lo mismo"
	}
}
