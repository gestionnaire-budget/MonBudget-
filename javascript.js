// Validation des données
function validateExpense(amount) {
  if (amount <= 0 || isNaN(amount)) {
    return false;
  }
  return true;
}

// Tableau des dépenses
let expenses = [];

// Fonction pour ajouter une dépense et l'afficher dans le tableau
function addExpense(amount) {
  const date = new Date().toLocaleDateString(); // Date actuelle
  const category = "Alimentation"; // Exemple de catégorie
  expenses.push({ date, amount, category });

  // Ajout au tableau HTML
  const tableBody = document.querySelector('#expense-table tbody');
  const row = tableBody.insertRow();
  row.innerHTML = `<td>${date}</td><td>${amount}€</td><td>${category}</td>`;
}

// Gestionnaire d'événement pour le formulaire
document.getElementById('expense-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission du formulaire par défaut

  const amount = parseFloat(document.getElementById('amount').value);
  const errorMessage = document.getElementById('error-message');

  // Validation du montant
  if (!validateExpense(amount)) {
    errorMessage.textContent = "Veuillez entrer un montant positif valide.";
  } else {
    errorMessage.textContent = "";
    addExpense(amount); // Ajouter la dépense et mettre à jour le tableau
  }
});

// Données fictives pour les dépenses par mois
const monthlyExpenses = {
  "Jan": 100,
  "Feb": 150,
  "Mar": 120,
  "Apr": 180,
  "May": 110,
  "Jun": 130,
  "Jul": 160,
  "Aug": 140,
  "Sep": 170,
  "Oct": 160,
  "Nov": 150,
  "Dec": 200
};

// Création du graphique Chart.js
const ctx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Object.keys(monthlyExpenses),
    datasets: [{
      label: 'Dépenses mensuelles (€)',
      data: Object.values(monthlyExpenses),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
<button onclick="location.href='tableau.html'">Accéder au tableau de gestion de budget</button>
