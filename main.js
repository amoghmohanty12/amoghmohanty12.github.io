document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById('tab-' + target).classList.add('active');
    });
  });
});
