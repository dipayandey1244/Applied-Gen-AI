function showSuccess() {
  const el = document.getElementById('success');
  el.hidden = false;
}

document.getElementById('year').textContent = new Date().getFullYear();
