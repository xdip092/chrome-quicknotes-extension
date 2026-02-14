const notesInput = document.getElementById("notes");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("status");

chrome.storage.local.get(["quickNotes"], (result) => {
  notesInput.value = result.quickNotes || "";
});

saveBtn.addEventListener("click", () => {
  const text = notesInput.value;
  chrome.storage.local.set({ quickNotes: text }, () => {
    status.textContent = "Saved";
    setTimeout(() => {
      status.textContent = "";
    }, 1200);
  });
});
