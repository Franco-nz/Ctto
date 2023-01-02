const imgLinks = document.querySelectorAll('.link')

const imgNoLinks = document.querySelectorAll('.butt')

//saber si existe un user o no

// creo funcion (loginCheck), recibe un usuario. El usuario tiene un condicional, si el user existe.. caso contrairo..

const modal = new bootstrap.Modal(document.getElementById('Modal'))

console.log("check si hay user")

export const loginCheck = user => 
{
    if (user && modal._isShown) 
    {
        modal.hide()
        console.log("hay user")
    }

    document.addEventListener('click', (e) => 
    {
        if (e.target.id === 'linkto') 
        {
            if (user) 
            {
                window.open('http://ctto.com.ar/', '_blank')
                console.log("hay userrr")
            } else {
                modal.show()
                console.log("no hay ussser")
            }
        }
    })

    //     imgNoLinks.forEach(link => link.style.display = 'block')
    //     imgNoLinks.forEach(link => link.style.visibility = "hidden")

    //     imgLinks.forEach(link => link.style.visibility = "visible")

    // }
    // else {
    //     console.log(98989 + " no user ")
    //     console.log(123)
    //     console.log(imgNoLinks)

    //     imgNoLinks.forEach(link => link.style.display = 'visible')
    //     imgNoLinks.forEach(link => link.style.visibility = "visible")

    //     imgLinks.forEach(link => link.style.display = 'block')
    //     imgLinks.forEach(link => link.style.visibility = "hidden")

}