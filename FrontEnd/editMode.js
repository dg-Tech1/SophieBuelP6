// Fonction pour récupérer les informations d'authentification à partir du "sessionStorage" et test pour appeler la fonction "editModeActivation" si authentifié.
export function editMode() {
	const authentificationState = sessionStorage.getItem("authentificationState");

	if (authentificationState === "true") {
		editModeActivation("flex");
	} else {
		editModeActivation("none");
}};

// Fonction d'actualisation de la page INDEX.HTML en "MODE EDITION" (si authentifié).
function editModeActivation (state) {
	const editModeElement = document.querySelectorAll(".edit-mode");
	
	for (let i = 0; i < editModeElement.length; i++) {   //La boucle for ajuste la visibilité de tous les éléments ayant la classe "edit-mode" 
		editModeElement[i].style.display = state;        //en fonction de la valeur du paramètre state.
}};//Elle est utilisée pour activer ou désactiver un mode d'édition en fonction de l'authentification.
