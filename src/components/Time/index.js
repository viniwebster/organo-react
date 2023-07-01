import Card from '../Card';
import './Time.css';

function Time(props) {
    return (

    props.cards.length > 0 ? <section className='time'style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards-container'>
                {props.cards.map(card => <Card key={card.nome} nome={card.nome} cargo={card.cargo} imagem={card.imagem} corDeFundo={props.corPrimaria}/>)}
            </div>
        </section> 
        : ''
    )
}

export default Time