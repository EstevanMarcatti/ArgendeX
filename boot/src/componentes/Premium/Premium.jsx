import './Premium.css'




export default function Premium() {

    return (
        <>
            <div id="premium">

                {/*Parte para escolher o plano Premium*/}

                <h1 id="txt">Escolha o plano ideal para você</h1>
                <div className="premium">
                    <div className="gratis">
                        <h3>Gratuito</h3>
                        <p>Saia do caderninho ou planilha e venha para o novo mundo digital.</p>
                        <h2>Zero!</h2>
                        <p>1 - profissional cadastrado</p>
                        <p>2 - 20 lembretes para testar</p>
                        <p>3 - Agendamentos limitados</p>
                        <p id="vis">4 -</p>
                        <div className="submit">
                            <input type="hidden" name="acao" value="enviar" />
                            <a href="cadastro.html"><button type="submit" name="Submit" className="btn_2">Comece grátis</button></a>
                        </div>
                    </div>
                    <div className="universidade">
                        <h3>Universitário</h3>
                        <p>Controle e gestão essencial para o dia a dia de sua turma.(anual)</p>
                        <h2>R$ 86,90</h2>
                        <p>1 - Personalização do site</p>
                        <p>2 - Cores de escolhas propria</p>
                        <p>3 - Adicionar mais lembretes</p>
                        <p id="vis"> 4 -</p>
                        <div className="submit">
                            <input type="hidden" name="acao" value="enviar" />
                            <a href="https://pay.kiwify.com.br/Dly1fmM"><button type="submit" name="Submit" className="btn_2">Adquirir agora</button></a>
                        </div>
                    </div>
                    <div className="avancado">
                        <h3>Avançado</h3>
                        <p>Agilize o crescimento de sua empresa com a ArgendeX.(anual)</p>
                        <h2>R$ 152,90</h2>
                        <p>1 - Personalização do site</p>
                        <p>2 - Cores modificadas de escolhas</p>
                        <p>3 - Adicionar mais lembretes </p>
                        <p>4 - Agendamentos ilimitados </p>
                        <div className="submit">
                            <input type="hidden" name="acao" value="enviar" />
                            <a href="https://pay.kiwify.com.br/h9zfQlN"><button type="submit" name="Submit" className="btn_2">Adquirir agora</button></a>
                        </div>
                    </div>

                </div>
                <hr />
            </div>

        </>
    )


}
