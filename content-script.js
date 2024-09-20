// Listen for keydown events in capture phase to prevent Gmail's default behavior
document.addEventListener(
  "keydown",
  (event) => {
    if (event.ctrlKey && event.key === "Enter") {  // Detect Ctrl+Enter
      event.preventDefault();  // Prevent Gmail from sending the email
      event.stopImmediatePropagation();  // Stop any other event listeners (including Gmail's)
      alert("Ctrl+Enter was pressed, but the email won't be sent!");  
    }
  },
  true  // Capture phase to intercept the event before Gmail handles it
);
