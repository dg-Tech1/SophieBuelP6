// Récupération des données "WORKS" sur l'API.
const responseWorks = await fetch("http://localhost:5678/api/works"); // Attend que la réponse de la requête soit traitée et transformée en JSON.
const works = await responseWorks.json(); // Exporte les données des travaux ("WORKS") pour être utilisées dans d'autres fichiers.
export {works};  //exportez les variables works et categories depuis ce module (fichier) pour les rendre dispo et accessible

// Récupération des données "CATEGORIES" sur l'API.
const responseCategories = await fetch("http://localhost:5678/api/categories"); // Attend que la réponse de la requête soit traitée et transformée en JSON.
const categories = await responseCategories.json();  // Exporte les données des catégories ("CATEGORIES") pour être utilisées dans d'autres fichiers.
export {categories};  //exportez les variables works et categories depuis ce module (fichier) pour les rendre dispo et accessible
