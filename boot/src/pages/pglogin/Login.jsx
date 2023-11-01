import './login.css'

export default function Login() {
    return (
        <div id='backlogin'>
            <div id="main-container-Login">
                <div className="inicio">
                    <a id="inicial" href="">ArgendeX</a>
                </div>
                <h1>Conecte-se e organize sua agenda.</h1>

                <form id="register-form" action="">

                    <div className="email-form">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="8" data-email-validate />
                    </div>

                    <div className="form-box spacing">
                        <label for="lastname">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" data-password-validate data-required />
                    </div>

                    <div className="button-form">
                        <input id="btn-submit" type="submit" value="Entrar" />
                    </div>

                    <div className="volta">
                        <p id="volta1">Esqueceu sua senha?<a id="text1" href="Esqsenha"> clique aqui</a></p>
                        <p id="volta2">Precisa de ajuda?<a id="text1" href="Suporte"> Acesse nossa central de ajuda.</a></p>
                    </div>
                </form>

            </div>
            <p className="error-validation template"></p>
            <script src="../../js/jscadastro.js"></script>
        </div>

    );
}

