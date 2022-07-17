import classes from "./Hamburger.module.css";

import { Icon } from '@iconify/react';


const Hamburger = props => {
    return (
        <div  className={classes.hamburger}>
            <ul>
                <li>
                    <h4>HOME</h4>
                </li>
                <li>
                    <h4>CONTACT</h4>
                </li>
                <li>
                    <button>LOGIN</button>
                </li>
                <li>
                    <button>SIGN UP</button>
                </li>
            </ul>
            <span onClick={props.onClose} ><Icon icon="ep:close-bold" className={classes.close}  /></span> 
        </div>
        
    );
};

export default Hamburger;