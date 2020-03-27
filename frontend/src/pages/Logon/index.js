import React from './node_modules/react';
import './styles.css';
import heroesImg from '../../assets/heroesImg.png';

export default function Logon(){
    return(
        <div>
            <div className="logon-container">
                <section className="form">

                </section>
                <img src={heroesImg} alt="Heroes"/>
            </div>
        </div>
    );
}