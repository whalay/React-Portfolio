import classes from './Footer.module.css';

import lamp from '../asset/images/lamp.png';
import { Icon } from '@iconify/react';


const Footer = () => {

    return (
        <footer className={classes.footer}>
            <div className={classes.lamp}>
                <img src={lamp} alt="lamp png" />
                <button ><Icon icon="ant-design:download-outlined" className={classes.icon} /> Download The App</button>

            </div>
            <div className={classes.form}>
                <h3>Contact Us</h3>
                <label htmlFor="">Enter Name</label>
                <input type="text" />
                <label htmlFor="">Enter Mail</label>
                <input type="text" />
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Sign Up</button>
            </div>
        </footer>
    );
};

export default Footer;