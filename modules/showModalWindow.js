import ModalWindow from "../components/ModalWindow.mjs";

alert(`Увидеть модальное окно вы можете нажатием на кнопку "Попробовать бесплатно" `);

document.body.addEventListener("click", (e) => {
  const target = e.target;

  if(target.closest(".try-btn")){
    document.body.innerHTML += ModalWindow("signIn")
  }

  if(target.closest(".modal__options__close-btn")){
    const modal = document.querySelector(".modal");
    modal.remove();
  }
});