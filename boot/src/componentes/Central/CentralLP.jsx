import './CentralLP.css'



export default function CentralLP() {

    return (
        <>
            {/*cadastro do email*/}
            <section className="meio">
                <div className="sobre">
                    <h1 id="verde">Site para agendamentos de sua empresa</h1>
                    <h1 id="branco">Programação de agendamentos, melhore seus serviços, promova seu negócio, agendamento
                        online 24h, lembrete para clientes.</h1>
                    <div className="Formulario">
                        <div className="form_grupo">
                            <label for="nome" className="form_label"></label>
                            <input type="email" name="Email" className="form_input" id="Email" placeholder="Email" required />
                        </div>
                        <div className="submit">
                            <input type="hidden" name="acao" value="enviar" />
                            <a href="cadastro.html"><button
                                type="submit" name="Submit" className="submit_btn">Receba notificações via Email
                            </button></a>
                        </div>

                    </div>
                    <br />
                </div>
                {/*Imagem lateral da primeira parte do site*/}
                <iframe src="https://my.spline.design/argendex1-11ebd772f929de9991bdcae396c4a4dd/" frameborder="0"
                    width="3000px" id="obj3d"></iframe>

                <div id="logocobre">
                    <img src="https://thumbs2.imgbox.com/8c/ab/eDptieML_t.png" alt=""/>
                </div>

            </section>
        </>
    );

}
