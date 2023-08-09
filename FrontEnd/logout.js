
		// Vérifie si l'utilisateur est connecté en utilisant les données du sessionStorage.
		const isLoggedIn = sessionStorage.getItem("authentificationState") === "true";
		
		// Fonction pour gérer la déconnexion
		function logout() {
			// Supprimez les données d'authentification du sessionStorage.
			sessionStorage.removeItem("authentificationToken");
			sessionStorage.removeItem("authentificationState");
		
			// Cachez le lien "logout" et affichez le lien "login".
			document.getElementById("login-link").style.display = "block";
			document.getElementById("logout-link").style.display = "none";
		
			// Redirigez l'utilisateur vers la page de connexion.
			window.location.href = "login.html";
		}
		
		// Fonction pour afficher le lien "logout" lorsque l'utilisateur est connecté.
		function showLogoutLink() {
			document.getElementById("login-link").style.display = "none";
			document.getElementById("logout-link").style.display = "block";
		}
		
		// Fonction pour cacher le lien "logout" lorsque l'utilisateur est déconnecté.
		function hideLogoutLink() {
			document.getElementById("login-link").style.display = "block";
			document.getElementById("logout-link").style.display = "none";
		}
		
		// Appellez la fonction appropriée en fonction de l'état de connexion de l'utilisateur.
		if (isLoggedIn) {
			showLogoutLink();
		} else {
			hideLogoutLink();
		}
		
		// Ajoutez un gestionnaire d'événements au lien "logout" pour appeler la fonction de déconnexion lorsque l'utilisateur clique dessus.
		document.getElementById("logout-link").addEventListener("click", function(event) {
			event.preventDefault();
			logout();
		});
	
