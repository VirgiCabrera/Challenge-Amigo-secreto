// --- Variables
// Contiene variable para almacenar los nombres de los amigos
const amigos = [];
// Elemento HTML del Input de texto
const inputText = document.getElementById('amigo');
// Element Button del HTML
const buttonAdd = document.getElementById('agregar');
// Elemento Ul del HTML con la lista de amigos
const listaAmigos = document.getElementById('listaAmigos');
// Elemento button para sortear amigos
const buttonDraw = document.getElementById('sortear');
// Variable que valida input ingresado:
let inputValido = false;

// --- Ejecución del programa
// Logging de los elementos

main();

// --- Funciones o declaraciones programáticas

function main(){
  console.log(inputText);
  console.log(buttonAdd);
  desactivarButton()
  inputText.addEventListener('keyup', validate);
}

function agregarItem() {
  if(!inputValido) return
  const amigo = inputText.value;
  if(amigo === '') return
  amigos.push(amigo);
  console.log('amigo', amigo);
  console.log('amigos', amigos);
  inputText.value = '';
}

// Función que valida el input ingresado
function validate() {
  const validityState = inputText.validity;
  console.log(validityState, 'validityState')

  if (validityState.patternMismatch) {
    inputText.setCustomValidity("El nombre solo puede contener letras y espacios");
    inputValido = false;
    desactivarButton()
  } else if(validityState.valueMissing) {
    inputText.setCustomValidity("Por favor, ingresa un nombre");
    inputValido = false;
    desactivarButton()
  }
  else {
    inputText.setCustomValidity("");
    inputValido = true;
    buttonAdd.disabled = false;
  }
  
  let report = inputText.reportValidity()
  return report
}

// Función que agregar valores al Array de amigos y los inserta en el HTML
function agregarAmigo(){
  listaAmigos.innerHTML = '';
  agregarItem();
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  }
  desactivarButton()
}

// Función que sortea el amigo secreto
function sortearAmigo(){
  const numberSorteado = Math.floor(Math.random() * amigos.length)
  console.log(numberSorteado, 'numberSorteado')
  const amigoSorteado = amigos[numberSorteado];
  console.log('amigoSorteado', amigoSorteado );
  const li = document.createElement('li');
  li.textContent = amigoSorteado;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  resultado.appendChild(li);
}

function desactivarButton(){
  buttonAdd.disabled = true
}
