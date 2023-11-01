import './cadastro.css'

export default function Cadastro() {
    return (
        <div id='backcadastro'>
            <div id="main-container-Cadastro">
                <div className="inicio">
                    <a id="inicial" href="">ArgendeX</a >
                </div>
                <h2 id="text">
                    Crie sua conta no <b id="text1">ArgendeX</b>
                </h2>
                <form id="register-form" action="">
                    <div className="form-box spacing">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3"
                            data-max-length="40" />
                    </div>
                    <div className="email-form">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="8"
                            data-email-validate />
                    </div>
                    <div className="form-box spacing">
                        <label for="lastname">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha"
                            data-password-validate data-required />
                    </div>
                    <div className="form-box">
                        <label for="passconfirmation">Confirmação de senha</label>
                        <input type="password" name="passconfirmation" id="passwordconfirmation"
                            placeholder="Digite novamente sua senha" data-equal="password" />
                    </div>
                    <div>
                        <input type="checkbox" name="agreement" id="agreement" required />
                        <label for="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
                    </div>

                    <div className="button-form" id="box-button">
                        <input id="btn-submit" type="submit" value="Registrar" />
                        <input id="button" type="button" value="Cancelar" onclick="limpaForm()" />
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