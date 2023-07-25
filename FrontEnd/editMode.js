Information d'authentification dans le "sessiostorage"appeler la fonction "editModeActivation" si authentifié. 
export function editMode() {
	const authentificationState = sessionStorage.getItem("authentificationState");

	if (authentificationState === "true") {
		editModeActivation("flex");
	} else {
		editModeActivation("none");
}};

// Actualisation de la page INDEX.HTML en "MODE EDITION" (si authentifié).
function editModeActivation (state) {
	const editModeElement = document.querySelectorAll(".edit-mode");
	
	for (let i = 0; i < editModeElement.length; i++) {
		editModeElement[i].style.display = state;
}};
