function f1() {
    // a) Récupérer le pays saisi par l'utilisateur
    var pays = document.getElementById('pays').value.trim();
    
    // b) Récupérer la capitale saisie par l'utilisateur
    var capitale = document.getElementById('capitale').value.trim();
    
    // c) Récupérer le tableau existant où les lignes seront ajoutées
    var tableau = document.querySelector('table');
    
    // d) Créer un nouvel élément ligne (tr)
    var nouvelleLigne = document.createElement('tr');
    
    // Créer les cellules (td) pour la nouvelle ligne
    var cellulePays = document.createElement('td');
    var celluleCapitale = document.createElement('td');
    
    // Assigner les valeurs saisies aux cellules
    cellulePays.textContent = pays;
    celluleCapitale.textContent = capitale;
    
    // Ajouter les cellules à la nouvelle ligne
    nouvelleLigne.appendChild(cellulePays);
    nouvelleLigne.appendChild(celluleCapitale);
    
    // Ajouter la nouvelle ligne au tableau
    tableau.appendChild(nouvelleLigne);
    
    // Réinitialiser les champs de saisie
    document.getElementById('pays').value = '';
    document.getElementById('capitale').value = '';
}
