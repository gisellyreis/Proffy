import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/47332912?s=460&v=4" alt="Giselly Reis" />
                <div>
                    <strong>Giselly Reis</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
                <br/><br/>
                Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button" >
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;