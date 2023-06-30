import './Rodape.css';

function Rodape(props) {
    return(
        <footer className='footer'>
            <ul className='sociais'>
                <li>
                    <a href='https://facebook.com'> <img src='/images/fb.png' alt='Facebook'/> </a> 
                </li>

                <li>   
                    <a href='https://twitter.com'> <img src='/images/tw.png' alt='Twitter'/> </a> 
                </li>

                <li>
                    <a href='https://instagram.com'> <img src='/images/ig.png' alt='Instagram'/> </a> 
                </li>
            </ul>

            <img src='/images/logo.png' alt='logo'/>

            <p> Desenvolvido por {props.nome}</p>

        </footer>
    )
}

export default Rodape