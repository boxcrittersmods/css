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
		let { toggleTarget, toggleClass, toggleSelf } = this.dataset;
		console.debug({ toggleTarget, toggleClass, toggleSelf });
		if (void 0 !== toggleSelf) {
			this.classList.toggle(toggleSelf);
		}
		if (void 0 == toggleTarget) return;
		let target = document.querySelector(toggleTarget);
		if (void 0 == target) return;
		console.debug("Target:", target);
		if (void 0 !== toggleClass) {
			target.classList.toggle(toggleClass);
		}

	}

	function setupTogglers() {
		let togglers = document.querySelectorAll(".toggler");
		[].forEach.call(togglers, toggler => {
			toggler.addEventListener("click", toggleEvent);
		});
	}
	setupTogglers();
})();