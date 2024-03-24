document.addEventListener("DOMContentLoaded", function() {
  const feedbackForm = document.getElementById("feedbackForm");
  const getInTouchForm = document.getElementById("getInTouchForm");

  // Feedback Section
  function submitFeedback() {
    const initialsInput = document.getElementById("initials");
    const commentInput = document.getElementById("comment");
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Message displayed on feedback
    feedbackMessage.textContent = "Thank you for your feedback.";

    // Save values to local storage
    localStorage.setItem("initials", initialsInput.value);
    localStorage.setItem("comment", commentInput.value);

    // Clear input fields
    initialsInput.value = "";
    commentInput.value = "";
  }

  // Get In Touch Section
  function submitGetInTouchForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const questionsInput = document.getElementById("questions");
    const getInTouchMessage = document.getElementById("getInTouchMessage");

    // Message displayed on get in touch
    getInTouchMessage.textContent = "Thank you for reaching out to us, we'll get back to you as soon as we can.";

    // Save values to local storage
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("questions", questionsInput.value);

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";
    questionsInput.value = "";
  }

  // Populate form fields with stored values on page load
  function populateForm() {
    document.getElementById("initials").value = localStorage.getItem("initials") || "";
    document.getElementById("comment").value = localStorage.getItem("comment") || "";
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("questions").value = localStorage.getItem("questions") || "";
  }

  // Attach event listeners to the buttons
  document.getElementById("submitFeedbackBtn").addEventListener("click", submitFeedback);
  document.getElementById("sendButton").addEventListener("click", submitGetInTouchForm);

  // Populate form fields with stored values on page load
  populateForm();
});
