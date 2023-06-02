/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function handleModal(){
    const buttons = document.querySelectorAll(".subscribe__button")
    const modalController = document.querySelector(".modal__controller")

    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i]
        button.addEventListener("click", function(){
            modalController.showModal()

            closeModal()
            closeModalOutlineClick()
        })
    }
}

function closeModal(){
    const button = document.querySelector(".modal__close")
    const modalController = document.querySelector(".modal__controller")

    button.addEventListener("click", function(){
        modalController.close()
    })
}

function closeModalOutlineClick(){
    const body = document.querySelector("body")

    body.addEventListener("click", function(event){
        if(event.target.classList.contains("modal__controller")){
            const modal = document.querySelector(".modal__controller")

            modal.close()
        }
    })
}

handleModal()
