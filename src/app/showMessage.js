// creo una función que se ejecuta cuando se da el evento que la dispara
// la funcion recibe algunos parametros, como mensaje y tipo
// mensjae: lo que quiero que se vea en el toast
// tipo: si le envio un texto que diga error, el mensaje debe ser rojo, si va un success, el mensaje debe ser verde
// export para poder reutilizar esta función


export function showMessage(message, type = "success")
{

    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        // si login es correccto, va fondo verde, caso contrario, rojo de background
          background: type === "success" ? "green" : "red"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
