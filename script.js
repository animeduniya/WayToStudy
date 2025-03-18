// Load Chapters Based on Class
function loadChapters() {
  const classSelected = document.getElementById("classSelect").value;
  const chapterContainer = document.getElementById("chapterContainer");

  if (!classSelected) {
    chapterContainer.innerHTML = "<p>Please select a class to view chapters.</p>";
    return;
  }

  let chapters = [
    `Chapter 1 - Introduction`,
    `Chapter 2 - Basics`,
    `Chapter 3 - Advanced Concepts`
  ];

  chapterContainer.innerHTML = "<h3>Chapters:</h3><ul>" +
    chapters.map(chap => `<li>${chap}</li>`).join("") +
    "</ul>";
}

// Download Notes
document.getElementById("downloadNotes").onclick = function () {
  const classSelected = document.getElementById("classSelect").value;
  if (classSelected) {
    window.location.href = `notes/${classSelected}-notes.pdf`;
  } else {
    alert("Please select a class first.");
  }
};

// AI Assistant using Wikipedia
function askAI() {
  const question = document.getElementById("question").value;
  const aiResponse = document.getElementById("ai-response");

  if (!question.trim()) {
    aiResponse.innerHTML = "<p>Please enter a valid question!</p>";
    return;
  }

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(question)}`)
    .then(response => {
      if (!response.ok) throw new Error("No information found.");
      return response.json();
    })
    .then(data => {
      aiResponse.innerHTML = `<h3>${data.title}</h3><p>${data.extract}</p>`;
    })
    .catch(() => {
      aiResponse.innerHTML = "<p>Sorry, I couldn't find an answer. Try a different question.</p>";
    });
}
