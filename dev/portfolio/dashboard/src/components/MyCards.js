import React from 'react';

// Dummy component
const MyCards = props => {
    return (
        <article style={styles.myArticle}>
            <img src={props.img} alt="This is an alt tag about Muffins" />
            <h1>Muffins</h1>
            <p>Muffins are so delicious, i just want to eat them all. Especially if they are blueberry muffins.</p>
            <div style={styles.buttons}>
                <button type="Submit" style={styles.cardButton}>SHARE</button>
                <button type="Submit" style={styles.cardButton}>LEARN MORE</button>
            </div>
        </article>
    )
}
export default MyCards

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        with: '250px',
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