const menuBtn = document.querySelector(".LeftMenu");
const leftSlidingMenu = document.querySelector(".SidePanelLeft");
const topNavLeftMenu = document.querySelector(".Left");

menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
	leftSlidingMenu.classList.toggle("open");
	topNavLeftMenu.classList.toggle("open");
});

const userBtn = document.querySelector(".SignInIcon");
const rightSlidingMenu = document.querySelector(".SidePanelRight");
// const topNavRightMenu = document.querySelector(".Right");
const closeBtn = document.querySelector(".CloseIcon");

userBtn.addEventListener("click", () => {
	rightSlidingMenu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
	rightSlidingMenu.classList.remove("open");
});

// MOBILE FOOTER
const mobileFooterItems = document.querySelectorAll(".MobileFooterItem");

mobileFooterItems.forEach((item) => {
	const mobileFooterHeader = item.querySelector(".MobileFooterHeader");
	mobileFooterHeader.addEventListener("click", () => {
		const openItem = document.querySelector(".MobileFooterOpen");
		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const mobileFooterContent = item.querySelector(".MobileFooterContent");

	if (item.classList.contains("MobileFooterOpen")) {
		mobileFooterContent.removeAttribute("style");
		item.classList.remove("MobileFooterOpen");
	} else {
		mobileFooterContent.style.height =
			mobileFooterContent.scrollHeight + "px";
		item.classList.add("MobileFooterOpen");
	}
};

// // SIGN IN REGISTER PAGE

// const authenticate = document.querySelector("#AutentificareCTA");
// const register = document.querySelector("#ContNouCTA");
// const authenticateCTA = document.querySelector(".OptionPickerCTA");

// authenticate.addEventListener("click", () => {
// 	const registerTab = document.querySelector(".RegisterForm");
// 	const signInTab = document.querySelector(".SignInFormContainer");
// 	if (
// 		registerTab.style.display === "none" &&
// 		signInTab.style.display === "flex"
// 	) {
// 		registerTab.style.display = "flex";
// 		signInTab.style.display = "none";
// 	} else {
// 		registerTab.style.display = "none";
// 		signInTab.style.display = "flex";
// 	}
// });
