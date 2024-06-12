import SignInForm from "./SignInForm.mjs";

const ModalWindow = (flag) => {

  const view = `
    <div class="modal">
      <div class="modal__options">
        <span class="modal__options__close-btn">
          <img src="./../assets/cross.svg" />
        </span>
      </div>

      ${flag === "signIn" ? SignInForm() : ""}
    </div>
  `

  return view;
}

export default ModalWindow;