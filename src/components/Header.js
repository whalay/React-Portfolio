
import classes from './Header.module.css';
import logo from '../asset/images/logo.svg';
import couch from '../asset/images/couch.png';
import app from '../asset/images/app.svg';
import { Icon } from '@iconify/react';

const Header = props => {

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <div className={classes.link}>
                        <h4>HOME</h4>
                        <h4>CONTACT</h4>
                    </div>
                    <div className={classes['link-button']}>
                        <button className={classes['login']}>LOGIN</button>
                        <button className={classes['sign-up']}>SIGN UP</button>
                    </div>
                </nav>
                <div className={classes.pictures}>
                    <img src={couch} alt="couch" className={classes.couch} />
                </div>
                <div className={classes['app-center']}>
                    <img src={app} alt="app" className={classes.app} />
                </div>
                <div className={classes.download}>
                <button ><Icon icon="ant-design:download-outlined" className={classes.icon}/> Download The App</button>
                </div>

                <span onClick={props.onClick}><Icon icon="icon-park:hamburger-button" className={classes.ham}/></span>
                <img src={logo} alt="Logo" className={classes.logo} />

            </header>
        </>
    );
};

export default Header;