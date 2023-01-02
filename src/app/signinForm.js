//signInWithEmailAndPassword es una función que espera 3 parámetros, auth, email y pass, solo que no registra, mas bien valida si el user ya está registrado
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

//importo auth, objeto ya configurado en firebase para poder validar
import { auth } from './firebase.js'

import { showMessage } from './showMessage.js'





//creo const que almacena lo que viene desde login-form del index, linea 63
const signInForm = document.querySelector('#login-form');

//cuando suceda el evento submit, calculo el evento con el objeto e




signInForm.addEventListener('submit', async e =>
{
    e.preventDefault()

    // extraigo y almaceno de signInForm el elemento que se llama signup-email, solo su valor, en la const email,. Lo mismo hago para pass
    const email = signInForm['signup-email'].value;
    const password = signInForm['signup-password'].value;

    console.log("vagzgz")



    try
    {

        //le paso los parámetros a la función, la función envía las credencial a back de firebase, si todo va bien, me devuelve los datos de las credenciales
        const credentials = await signInWithEmailAndPassword(auth, email, password)

        // console.log("zzzzzzz")

        console.log(credentials)
        console.log("vaaaalidaddo")

        const modal = bbootstrap.Modal(document.getElementById('Modal'))

        modal.hide()

        console.log("validaddddddddddo")

        showMessage('Welcome' + credentials.user.email) 

        console.log("validaddddddddddddddddddddddddo")
    } 
    catch (error) 
    {
        if (error.code === 'auth/wrong-password')
        {
            showMessage ('Wrong pass' , error)
                     console.log("zzzzzzz")
        }
        else if(error.code === 'user not found' , error)
        {
            // showMessage ('User not found--' , error)
                    // showMessage ('Wrong p5d5' , error)
                    // showMessage ('Wrong pass' , error)
        }
        else
        {
            showMessage(error.Message , 'error')            
        }


        // //muestro por consola si hay error
        // console.log(error)
        // console.log("ya ocupado")
    }
})


