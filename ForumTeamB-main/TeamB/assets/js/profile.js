document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
  const progressBar = document.querySelector('.progress-fill');
  const percentageText = document.querySelector('.percentage');
 
  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll('.checkbox input[type="checkbox"]:checked').length;
      const percentage = Math.round((checked / total) * 100);
     
      progressBar.style.width = `${percentage}%`;
      percentageText.textContent = `${percentage}% Complete`;
  }

  // Initialize progress on page load
  updateProgress();

  // Update progress on checkbox change
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', updateProgress);
  });
});