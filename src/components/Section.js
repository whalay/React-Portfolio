import classes from './Section.module.css';


import spotify from '../asset/images/spotify.svg'
import dell from '../asset/images/dell.svg'
import cisco from '../asset/images/cisco.svg'
import disney from '../asset/images/disney.svg'
import deezer from '../asset/images/deezer.svg'
import verizon from '../asset/images/verizon.svg'
import texas from '../asset/images/texas.svg'

const Section = props => {
    return (
        <section className={classes.section}>


            <h2>Our Partners</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque iusto accusamus consequuntur nulla? Dolores quasi nobis aut temporibus ipsum?</p>


            <div className={classes.partner}>

                <img src={spotify} alt="" />


                <img src={dell} alt="" />


                <img src={cisco} alt="" />


                <img src={disney} alt="" />


                <img src={deezer} alt="" />


                <img src={verizon} alt="" />


                <img src={texas} alt="" />


            </div>




        </section>

    );

};

export default Section;