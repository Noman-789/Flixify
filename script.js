function showTab(id) {
  const tabContent = document.getElementById(id);
  const tabButton = document.querySelector(`.tab[onclick*="${id}"]`);
  if (!tabContent || !tabButton) return;

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  tabContent.classList.add('active');
  tabButton.classList.add('active');
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('show');
}


