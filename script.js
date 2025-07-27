function toggleRecord(header) {
  const content = header.nextElementSibling;
  const isVisible = content.style.display === "block";

  // Toggle display
  content.style.display = isVisible ? "none" : "block";

  // Toggle arrow
  header.textContent = `${isVisible ? "▶" : "▼"} ${header.textContent.slice(2)}`;
}
