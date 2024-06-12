const SignInForm = () => {
  const view = `
  <form class="signIn-form">
    <h2>Вход в систему</h2>

    <input type="text" placeholder="Email/Телефон" id="email"/>
    <input type="password" placeholder="Пароль" id="password"/>

    <div class="signIn-form__remember-field">
      <input type="checkbox" id="pass-remember" name="pass-remember"/>
      <label for="pass-remember">Запомнить пароль</label>
    </div>

    <button class="signIn-form__restore-btn">Восстановить</button>

    <button class="signIn-form__signIn-btn">Войти</button>
    <button class="signIn-form__signUp-btn">Зарегистрироваться</button>
  </form>
  `

  return view;
}

export default SignInForm;