console.log(discussions); // Vérifie que le tableau est bien chargé

let screenDisplay = document.querySelector(".screenDisplay");
let button = document.querySelector(".valideQ");

// 🟢 Fonction de Levenshtein pour gérer les fautes de frappe
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= a.length; i++) matrix[i] = [i];
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // Suppression
        matrix[i][j - 1] + 1, // Insertion
        matrix[i - 1][j - 1] + cost // Remplacement
      );
    }
  }
  return matrix[a.length][b.length];
}

// 🟢 Fonction principale de recherche avec RegEx et Levenshtein
function findBestAnswer(userQuestion) {
  // 🔹 Vérification avec RegEx
  const answer = discussions.find((n) => n.regex.test(userQuestion));
  if (answer) {
    let randomIndex = Math.floor(Math.random() * answer.responses.length);
    return answer.responses[randomIndex];
  }

  // 🔹 Vérification avec Levenshtein
  let bestMatch = discussions.reduce((closest, n) => {
    // On récupère un exemple de question depuis la RegEx
    let exampleQuestion = n.regex
      .toString()
      .replace(/[\/\^$]/g, "")
      .split("|")[0];

    let distance = levenshtein(userQuestion, exampleQuestion.toLowerCase());

    return distance <= 6 && (!closest || distance < closest.distance)
      ? { response: n.responses[0], distance }
      : closest;
  }, null);

  return bestMatch
    ? bestMatch.response
    : "Je ne comprends pas ta question. Peux-tu reformuler ?";
}
// 🟢 Événement sur le bouton pour envoyer la question
button.addEventListener("click", () => {
  let inputText = document
    .querySelector(".inputText")
    .value.trim()
    .toLowerCase();
  let response = findBestAnswer(inputText);
  displayResponse(inputText, response);
});

// 🟢 Fonction pour afficher les messages
function displayResponse(userInput, botResponse) {
  let inputText = document.querySelector(".inputText");

  // 🟢 Créer l'élément pour afficher la question de l'utilisateur
  let userMessage = document.createElement("p");
  userMessage.classList.add("userTextQuestions");
  userMessage.textContent = "👤 " + userInput;

  // 🟢 Créer l'élément pour afficher la réponse du chatbot
  let botMessage = document.createElement("p");
  botMessage.classList.add("chatBotReturn");
  botMessage.textContent = "🤖 " + botResponse;

  // Ajouter les messages dans la section d'affichage
  screenDisplay.appendChild(userMessage);
  screenDisplay.appendChild(botMessage);

  // 🟢 Vider l’input après envoi
  inputText.value = "";

  // 🟢 Auto-scroll vers le dernier message
  screenDisplay.scrollTop = screenDisplay.scrollHeight;
}
