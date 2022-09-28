// when page load for the first time
fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		var p = document.querySelector(".quote");
		var quote = data.content;
		p.innerHTML = `" ${quote} "`;
	})
	.catch();

// when button clicked
function nextQ() {
	fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			var p = document.querySelector(".quote");
			var quote = data.content;
			p.innerHTML = `" ${quote} "`;
		});

	// click animation on button
	var btn = document.querySelector("#btn");
	btn.style.transform = "translateY(4px)";
	// go back to actual stage of button
	setTimeout(() => {
		var btn = document.querySelector("#btn");
		btn.style.transform = "none";
	}, 1);
}
