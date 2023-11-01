import Propscard from './Propscard';

const cards = [
    {
        txtcard: 'Conta',
        action1: 'Principais duvidas',
        action2: 'Mudar senha',
        action3: 'Mudar E-mail',
        action4: 'Entre em contato',

    },
    {
        txtcard: 'Assinaturas e Cobranças',
        action1: 'Principais duvidas',
        action2: 'Cancelar assinatura',
        action3: 'Reembolso',
        action4: 'Entre em contato',

    },
    {
        txtcard: 'Compartilhamento de eventos',
        action1: 'Principais duvidas',
        action2: 'Compartilhamento errado',
        action3: 'Cancelar compartilhamento',
        action4: 'Entre em contato',

    },

]

export default function Cards(){
    return(
        <div>
            {cards.map(function(item) {
                return(
                    <Propscard 
                        
                        txtcard={item.txtcard}
                        action1={item.action1}
                        action2={item.action2}
                        action3={item.action3}
                        action4={item.action4}
                    />
                )
            })}
        </div>
    )
}