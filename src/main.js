//traigo una funcion para saber si el user esta autenticado o no, onauthstatechanged
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

//importo auth desde app firebase
import { auth } from './app/firebase.js'

import { loginCheck } from './app/loginCheck.js'

import './app/login.js'

import './app/signinForm.js'



//si ejecuto esta función, lo pirmero que va a recibir es el parámetro de donde está nuestra conexión con la autenticacion (espera el parámetro auth)
//entonces tengo que importar auth, linea 5. una vez le paso esta funcion, el conde me envia una función asíncrona, y esta función me va a devolver datos, en este caso, el dato user
onAuthStateChanged(auth, async(user) =>
{
    // console.log(user)

    if (user)
    {
        loginCheck(user)
    }
    else
    {
        loginCheck(user)
    }
})
