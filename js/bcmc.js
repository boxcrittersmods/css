(function () {
	"use strict";
	const cooldown = 200;
	let cdEnded = true;

	function toggleEvent() {
		if (!cdEnded) {
			console.debug("Toggling is still under cooldown¬");
			return;
		}
		cdEnded = false;
		setTimeout(() => { console.debug("Toggle cooldown finished."); cdEnded = true; }, cooldown);
		console.debug("Hello I am", this);
		let data = this.dataset;
		if (void 0 !== data.toggleSelf) {
			this.classList.toggle(data.toggleSelf);
		}
		if (void 0 !== data.toggleBody) {
			document.body.classList.toggle(data.toggleBody);
		}
		if (void 0 == data.toggleTarget) return;
		let target = document.querySelector(data.toggleTarget);
		if (void 0 == target) return;
		console.debug("Target:", target);
		if (void 0 !== data.toggleClass) {
			target.classList.toggle(data.toggleClass);
		}

	}

	function setupTogglers() {
		let togglers = document.querySelectorAll(".toggler");
		[].forEach.call(togglers, toggler => {
			toggler.addEventListener("click", toggleEvent);
		});
	}
	setupTogglers();

	let links = {
		Mods: "https://boxcrittersmods.ga/mods",
		Shader: "https://boxcrittersmods.ga/shaders",
		Docs: "https://docs.boxcrittersmods.ga",
		API: "https://docs.boxcrittersmods.ga",
		Toolbox: "https://docs.boxcrittersmods.ga"
	};

	function setupBcmcMenu() {

	}



})();