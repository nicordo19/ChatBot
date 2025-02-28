console.log(discussions); // Vérifie que le tableau est bien chargé

let screenDisplay = document.querySelector(".screenDisplay");
let button = document.querySelector(".valideQ");

button.addEventListener("click", () => {
  getValueInput();
});

function getValueInput() {
  let inputText = document.querySelector(".inputText");
  let inputValue = inputText.value.trim().toLowerCase(); // Récupérer le texte tapé
  console.log("Texte saisi par l'utilisateur :", inputValue);

  // Vérifie si la question existe dans le tableau discussions
  const tabs = discussions.find(
    (n) => n.question.toLowerCase().trim() === inputValue
  );

  console.log("Réponse trouvée :", tabs);

  // 🟢 Créer l'élément pour afficher la question de l'utilisateur
  let userMessage = document.querySelector("p");
  userMessage.classList.add("userTextQuestions");
  userMessage.textContent = "👤 " + inputText.value;

  // 🟢 Créer l'élément pour afficher la réponse du chatbot
  let botMessage = document.createElement("p");
  botMessage.classList.add("chatBotReturn");

  if (tabs) {
    botMessage.textContent = "🤖 " + tabs.response;
  } else {
    botMessage.textContent = "🤖 Je ne comprends pas votre question.";
  }

  // Ajouter les messages dans la section d'affichage
  screenDisplay.appendChild(userMessage);
  screenDisplay.appendChild(botMessage);

  // 🟢 Vider l’input après envoi
  inputText.value = "";

  // 🟢 Auto-scroll vers le dernier message
  screenDisplay.scrollTop = screenDisplay.scrollHeight;
}

// function findRespons(userQuestion) {
//   const allQuestions = userQuestion;

//   const result = discussions.find(
//     (q) => q.question.toLowerCase() === allQuestions
//   );
//   return result ? result.response : "je ne comprend pas votre questien";
// }
// findRespons();
