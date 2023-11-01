import './suporte.css'

export default function Suporte() {
    return (

        <div id='backsuporte'>
            <div id="main-container-Suporte">
                <div className="inicio">
                    <a id="inicial" href="">ArgendeX</a>
                </div>
                <h2 id="text1">
                    Explique quais são os seus problemas? <b id="text1"></b>
                </h2>
                <form id="register-form" action="">
                    <div className="half-box spacing">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3"
                            data-max-length="40" />
                    </div>
                    <div className="full-box">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="8"
                            data-email-validate />
                    </div>
                    <div className="sup">
                        <label for="suport">Fale conosco</label>
                        <textarea name="suporte" id="suporte" cols="63" rows="10"></textarea>
                    </div>
                    <div className="arquivo">
                        <label for="arquivo">Anexe um arquivo</label>
                        <input type="file" name="arqv" id="arqv" />
                    </div>
                    <div className="full-box" id="box-button">
                        <a href="index.html"><input id="btn-submit" type="submit" value="Enviar" /></a>
                        <input id="button" type="button" value="Limpar" onclick="limpaForm()" />
                    </div>
                    <div className="volta">
                        <p id="volta1">Já tem conta no ArgendeX?<a id="text1" href="Login"> Vá para a página de login</a></p>
                        <p id="volta2">Volte para a pagina inicial<a id="text1" href="/"> clique aqui.</a></p>
                        <p id="volta2">Nao tem conta ainda?<a id="text1" href="Cadastro"> Crie agora!.</a></p>

                    </div>
                </form>
            </div>
            <p className="error-validation template"></p>
            <script src="../../js/jscadastro.js"></script>
        </div>

    );
}