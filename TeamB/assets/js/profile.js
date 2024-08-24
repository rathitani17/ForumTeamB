const progressFill = document.querySelector('.progress-fill');
const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
const percentage = document.querySelector('.percentage');

function updateProgress() {
  let completedItems = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      completedItems++;
    }
  });
  const totalItems = checkboxes.length;
  const progressWidth = (completedItems / totalItems) * 100;
  progressFill.style.width = progressWidth + '%';
  percentage.textContent = progressWidth + '% Complete';
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgress);
});

// Initial update
updateProgress();