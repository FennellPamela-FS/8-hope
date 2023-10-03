import React from 'react';
import MyBtn from './buttons/MyBtn';


// dummy component
const GroceryArticle = props => { // this is tha callback function
    return (  // return the view
        <article style={styles.myArticle}>
            <img src={props.val.gImg} alt={props.val.gAlt} />
            <h1>{props.val.gName}</h1>
            <p>{props.val.gDesc}</p>
            <div style={styles.buttons}>
                <MyBtn btnText="Edit" style={styles.cardButton} />
                <MyBtn btnText="Delete" onClick={props.delMe} style={styles.cardButton} />
            </div>
        </article>
    )
}
export default GroceryArticle

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: 'black',
        color: 'rgb(163,173,194)',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0,  0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardButton: {
        width: '30%',
        backgroundColor: 'none',
        color: 'aqua',
        padding: '5%'
    }
}