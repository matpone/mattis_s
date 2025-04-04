// Fonction pour afficher/masquer la calculatrice et le menu
function toggleCalculator() {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("calculator").classList.toggle("hidden");
}

// Fonction pour ajouter un nombre/opérateur à l'affichage
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Fonction pour supprimer le dernier caractère
function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

// Fonction pour calculer le résultat
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Erreur";
    }
}

// Fonction pour fermer la calculatrice
function closeCalculator() {
    window.close();
}
