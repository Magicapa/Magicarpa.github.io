// Definir el objeto DOM para centralizar el acceso a los elementos del formulario
const DOM = {
  formulario: document.getElementById("formulario"),
  passwordInput: document.getElementById("password"),
  mostrarContrasenaCheckbox: document.getElementById("mostrar-constrasena"),
};

// Función para mostrar/ocultar la contraseña
const togglePasswordVisibility = () => {
  DOM.mostrarContrasenaCheckbox.addEventListener("change", () => {
    DOM.passwordInput.type = DOM.mostrarContrasenaCheckbox.checked ? "text" : "password";
  });
};






// Configuración inicial
const init = () => {
  togglePasswordVisibility(); // Mostrar/ocultar la contraseña

  // Validación de aficiones al enviar el formulario
  DOM.formulario.addEventListener("submit", validateAficiones);
};

// Ejecutar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", init);