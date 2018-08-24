let logOutt = document.getElementById('singOut');
// Cierra Sesión
logOutt.addEventListener('click', element => {
  console.log('Saliendo');
  window.location.assign('views/login.html');
});