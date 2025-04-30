function handleOrderSubmit(event) {
	event.preventDefault();

	const name = event.target.querySelector('input[name="name"]').value;
	const menuItem = event.target.querySelector('select[name="menu-item"]').value;
	const quantity = event.target.querySelector('input[name="quantity"]').value;

	Swal.fire({
		title: "Order Confirmed!",
		text: `Your ${quantity} ${menuItem}(s) are cooking, ${name}! 🔥`,
		icon: "success",
		confirmButtonText: "Great!",
		confirmButtonColor: "#ff4500",
		background: "#4a3728",
		color: "#ffd700",
		didOpen: () => {
			Swal.getPopup().style.fontFamily = '"Press Start 2P", cursive';
			Swal.getConfirmButton().focus();
		},
		focusConfirm: true,
		allowOutsideClick: false,
	}).then((result) => {
		if (result.isConfirmed) {
			event.target.reset();
			document.querySelector('input[name="name"]').focus();
		}
	});
}

document.querySelectorAll(".learn-more").forEach((button) => {
	button.addEventListener("click", () => {
		const item = button.getAttribute("data-item");
		let description = "";
		if (item === "Lava Chicken") {
			description =
				"Cooked with real lava for a super spicy kick! A favorite from A Minecraft Movie.";
		} else if (item === "Spicy Cubed Fries") {
			description =
				"Blocky fries with a fiery seasoning. Perfect for adventurers!";
		} else {
			description =
				"A creamy milkshake to cool the lava heat. Made with Overworld ingredients.";
		}
		Swal.fire({
			title: item,
			text: description,
			icon: "info",
			confirmButtonText: "Got it!",
			confirmButtonColor: "#ff4500",
			background: "#4a3728",
			color: "#ffd700",
			didOpen: () => {
				Swal.getPopup().style.fontFamily = '"Press Start 2P", cursive';
			},
		});
	});
});

document.querySelector(".challenge-button").addEventListener("click", () => {
	Swal.fire({
		title: "Chicken Jockey Challenge",
		text: "Are you sure? It’s a lava attack! Eat Lava Chicken without water for 5 minutes!",
		icon: "warning",
		confirmButtonText: "I’m in!",
		confirmButtonColor: "#ff4500",
		background: "#4a3728",
		color: "#ffd700",
		didOpen: () => {
			Swal.getPopup().style.fontFamily = '"Press Start 2P", cursive';
		},
	});
});

document
	.querySelector("#order-form")
	.addEventListener("submit", handleOrderSubmit);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);
		targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
	});
});
