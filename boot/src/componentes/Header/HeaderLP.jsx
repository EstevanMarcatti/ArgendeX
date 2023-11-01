import {Link} from 'react-router-dom'

import './HeaderLP.css'

export default function HeaderLP() {
    return (
        <>
            <header>
                 {/*Inicio do cabecario*/}
    <div className="cabecario">
                     {/*Imagem Logo*/}
            <div className="logo">
                 <img src="https://thumbs2.imgbox.com/ee/0c/BmJk2mke_t.png" alt="image host" />
            </div>
                    <h1 id="title">ArgendeX</h1>
              {/*Inicio do menu de opcoes*/}
        <div className="menu">
            <nav>
                 
                <a href="#func">
                    <li>Funções</li>
                </a>

                <a href="#premium">
                    <li>Premium</li>
                </a>

                <li><Link to="/Suporte">Suporte</Link></li>

                <li><Link to="/Login">Login</Link></li>

                <li><Link id="conta" to="/Cadastro">Criar conta</Link></li>
            </nav>
            {/*Fim do menu de opcoes*/}
        </div>
    </div>
    {/*Fim do Cabecario*/}
            </header>

            
        </>


    );

}
