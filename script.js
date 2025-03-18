function askAI() {
  const question = document.getElementById("question").value;
  const aiResponse = document.getElementById("ai-response");

  if (!question.trim()) {
    aiResponse.innerHTML = "<p>Please enter a valid question!</p>";
    return;
  }

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(question)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("No information found.");
      }
      return response.json();
    })
    .then(data => {
      aiResponse.innerHTML = `<h3>${data.title}</h3><p>${data.extract}</p>`;
    })
    .catch(() => {
      aiResponse.innerHTML = "<p>Sorry, I couldn't find an answer. Try a different question.</p>";
    });
}
