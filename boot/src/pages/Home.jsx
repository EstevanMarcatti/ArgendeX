import HeaderLP from "../componentes/Header/HeaderLP";
import './Principal.css'
import CentralLP from '../componentes/Central/CentralLP'
import Funções from '../componentes/Funções/Funções'
import Produto from '../componentes/Produto/Produto'
import Premium from '../componentes/Premium/Premium'
import Footer from '../componentes/Footer/Footer';




export default function Home() {

    return (

        <div>
            <header>
                <HeaderLP />
            </header>

            <body>
                <div className="container">
                    <CentralLP />

                    <Funções />

                    <Produto />

                    <Premium />
                    
                    <Footer />
                </div>

            </body>
        </div>

    );

}
