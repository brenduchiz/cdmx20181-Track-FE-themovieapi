let signLogin = document.getElementById('button-login-entrar');
// Ingresa el usuario
signLogin.addEventListener('click', event => {
  let emailUser = document.getElementById('email').value;
  let passwordUser = document.getElementById('password').value;
  console.log(emailUser);
  console.log(passwordUser);
  firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
    .then(function() {
      setTimeout((event) => {
        window.location.reload();
      }, 2000);
      window.location.assign('../index.html');
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = 'Escribe un usuario o contraseña validos';
      console.log(errorCode);
      alert(errorMessage);
    });
});