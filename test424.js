
document.getElementById('myBtn').addEventListener("click", function()
{
	var caja = document.getElementById('caja');

	if (caja.style.display === "block") {
		caja.style.display = "none";
	}
	else {
		caja.style.display = "block";
	}


	var textoBoton = document.querySelector("button");

		if (caja.style.display === "block") {
		textoBoton = "none";
		}else{
		textoBoton = "block";
		}
		if (textoBoton === "block") {
			document.querySelector("button").innerHTML = "Show";
		}else{
			document.querySelector("button").innerHTML = "Hide";
		}
});
