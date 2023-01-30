//createUserWithEmailAndPassword es una función que espera 3 parámetros
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// importo auth desde firebase.js
import { auth } from './firebase.js'

// importo la función de showMessage desde firebase.js
import { showMessage } from './showMessage.js'


const login = document.querySelector('#login-form')

// cuando envien el evento submit, voy a recibir info de este evento
login.addEventListener('submit', async (e) => 
{
    e.preventDefault()

    // extraer de loginform, el email y el pass, y los guard en constantes que las identifiquen
    const email = login['signup-email'].value                   //.value   ----> pq solo quiero lo que se tipeó
    const password = login['signup-password'].value

    console.log(email, password + "-   -    -")

    //createUserWithEmailAndPassword el primer parámetro que espera, es la conexión de la autenticación (por eso fué exportado desde firbase.js)
    // le paso entonces la configuración
    // le paso email
    // le paso password
    //estos datos van a firebase para ser autenticados

    try 
    {
        console.log(989898989 + " us------")


        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        // esta linea es equivalente a una promesa, para que el await funicones, necesita el async en la función que contiene.
        //cuando termina de ejecutarse esta fubnción, se dá un resultado. al final, guardo los resultados en userCredentials

        console.log(userCredentials)

        //firebase espera que pass tenga 6 caracteres mínimo, si mando un pass con menos caracteres va a fallar
        //para considerar estos errores, coloco dentro de un try catch


        //cerrar el modal una vez logueado, selecciono el modal y lo guardo en una const

        //----- cerrar modal de regist
        // una vez que tengo el modal, lo voy a cerrar con boostrap
        // tengo colocado el script de boostrap al final de body, por lo que el código de boostrap ya está disponible en el navegador 
        //obtengo una instancia de un modal que ya se creó (loginModal), lo guardo en una cosntante modal, una vez tengo este modal, puedo activar metodos, en este caso hiden para ocultarlo

        //resumen: digo que modal quiero seleccionar, obtengo la información de ese modal (a través de boostrap), y finalmente lo oculto




        //una vez que el user ha sido registrado, se dá la bienvenida y se concatena con los datos del user
        //userCredentials.user.email es la direc donde está almacenado el user registrado, le paso ademas el tipy, en este caso se registró, por lo que va success
        showMessage("Welcome " + userCredentials.user.email)
    }

    //si algo va mal
    // en este caso, como tengo crear y loguear juntos, siempre tengo el caso de que el email ya esta en uso
    catch (error) 
    {
        console.log(989898989 + " us++++++----++++")

        console.log(error.message)
        console.log(error.code)

        // manejar el error en específico si el user ya existe



        // if(error.code === 'auth/email-already-in-use' && password === Credentials.user.email )
        // {
        //       showMessage("Welcome " + userCredentials.user.email)

        //       console.log("okk")
        // }
        // else
        // {


        //     console.log("kkkkkkkkkkkokk")

        // }



        //-----------------

        if (error.code === 'auth/email-already-in-use') 
        {
               // showMessage("Email en uso", "errorr")
        }

        // manejar el error en específico si la dirección email no es correcta
        else 
        {
        if (error.code === 'auth/invalid-email') 
        {
        showMessage("Invalid email", "error")
        }
            else 
            {
                // manejar el error en específico si el pass no es adecuado
                if (error.code === 'auth/weak-password') 
                {
                    showMessage("Password débil", "error")
                }
                else if (error.code) 
                {
                    showMessage(error.message, error)
                    // alert('Algo salió mal')
                }
            }
        }




        //-----------------





    }


})