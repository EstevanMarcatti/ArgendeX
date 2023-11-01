import './esqsenha.css'

export default function Esqsenha() {
    return (

        <div id='backesqsenha'>
            <div id="main-container-Esqsenha">
                <div className="inicio">
                    <a id="inicial" href="">ArgendeX</a>
                </div>
                <h2 id="text">
                    Redefinição de senha.
                </h2>
                <form id="register-form" action="">

                    <div className="email-form">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="8"
                            data-email-validate />
                    </div>

                    <div className="button-form" id="box-button">
                        <input id="btn-submit" type="submit" value="Redefinir" />
                    </div>
                    <div className="volta">
                        <p id="volta1">Já tem conta no ArgendeX?<a id="text1" href="Login"> Vá para a página de login</a></p>
                        <p id="volta2">Precisa de ajuda?<a id="text1" href="Suporte"> Acesse nossa central de ajuda.</a></p>
                    </div>
                </form>
            </div>
            <p className="error-validation template"></p>
            <script src="../../js/jscadastro.js"></script>
        </div>

    );
}