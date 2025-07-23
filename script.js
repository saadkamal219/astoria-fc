function toggleRecords() {
  const section = document.getElementById("records-content");
  const header = document.querySelector("#records h2");

  if (section.style.display === "none") {
    section.style.display = "block";
    header.textContent = "▼ Previous Season Records";
  } else {
    section.style.display = "none";
    header.textContent = "▶ Previous Season Records";
  }
}
