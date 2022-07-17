import React from "react";
import classes from './Main.module.css';
import dots from '../asset/images/dots.svg'
import { Icon } from '@iconify/react';


const Main = () => {
    return (
        <main className={classes.main}>
            <div className={classes.dots}>
                <span><img src={dots} alt="dots" /></span>
            </div>
            <div className={classes.content}>
                <div className={classes.circle}><Icon icon="fluent:key-16-filled" style={{fontSize: 50}} /></div>
                <h4>Safe</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime expedita veniam, vel nostrum earum e</p>
            </div>
            <div className={classes.content}>
                <div className={classes.circle}><Icon icon="ci:paypal" style={{fontSize: 50}} /></div>
                <h4>Easy Payment</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime expedita veniam, vel nostrum earum e</p>
            </div>
            <div className={classes.content}>
                <div className={classes.circle}><Icon icon="fa6-solid:lightbulb" style={{fontSize: 30}} /></div>
                <h4>Anytime</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime expedita veniam, vel nostrum earum e</p>
            </div>
            <div className={classes.dots1}>
                <span><img src={dots} alt="dots" /></span>
            </div>

        </main>
    );

}

export default Main;