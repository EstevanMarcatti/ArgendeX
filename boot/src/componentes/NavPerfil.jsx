import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './css_geral.css'

function NavPerfil(props){
     {/*dados do perfil alocado na anotaçoes.jsx*/}
    return (
        <div>
            <div id='lembr'>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#lembret">{props.assunto}</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                             <a id='datas'>{props.data}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
}

export default NavPerfil;