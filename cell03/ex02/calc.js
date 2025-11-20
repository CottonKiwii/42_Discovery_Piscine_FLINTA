setInterval(() => {
	alert("Please, use me...");
}, 30000);


document.getElementById("calculate").addEventListener("click", () => {
	let nbr1 = parseInt(document.getElementById("nbr1").value);
	let nbr2 = parseInt(document.getElementById("nbr2").value);
	let op = document.getElementById("operator").value;

	if (isNaN(nbr1) || isNaN(nbr2) || nbr1 < 0 || nbr2 < 0) {
		alert("Error :(");
		return ;
	}
	switch (document.getElementById("operator").value) {
		case "+":
			alert(nbr1 + nbr2);
			console.log(nbr1 + nbr2);
			break ;
		case "-":
			alert(nbr1 - nbr2);
			console.log(nbr1 - nbr2);
			break ;
		case "*":
			alert(nbr1 * nbr2);
			console.log(nbr1 * nbr2);
			break ;
		case "/":
			if (nbr2 === 0) {
				alert("It's over 9000!")
				console.log("It's over 9000!");
				break ;
			}
			alert(nbr1 / nbr2);
			console.log(nbr1 / nbr2);
			break ;
		case "%":
			if (nbr2 === 0) {
				alert("It's over 9000!")
				console.log("It's over 9000!");
				break ;
			}
			alert(nbr1 % nbr2);
			console.log(nbr1 % nbr2);
	}
});

