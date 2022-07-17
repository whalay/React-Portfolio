import classes from './Article.module.css';

import table from '../asset/images/table.png';

const Article = () => {

    return(
        <article className={classes.article}>
            <div className={classes.content}>
                <h2>Relax, You're Home</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Rerum dolore voluptatem dolores optio sed ut rem, libero expedita quam ex.
                </p>
            
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Rerum dolore voluptatem dolores optio sed ut rem, libero expedita quam ex.
                </p>

                <button>Sign Up</button>
            </div>
            <div className={classes.picture}>
                <img src={table} alt="table png" />
                </div>
        </article>
    );
};

export default Article;