import React from 'react';

import img1 from '../images/woodstone_2021-07-19-web.jpg';
import img2 from '../images/thunderbirdCafe.jpg';

// Dummy component
const MyAds = props => {
    return (
        <div>
            <aside style={styles.myAds}>
                <img src={img1} alt="This is an alt tag about Massanutten Resorts" />
                <h1 style={styles.title}>Massanutten Resorts</h1>
                <h3 style={styles.subTitle}>A four season destination.</h3>
                <p>Authentic Independent &amp; Unconditionally, Awesome!</p>
            </aside>
            <aside style={styles.myAds}>
                <img src={img2} alt="This is an alt tag about Thunderbird Cafe" />
                <h1 style={styles.title}>Thunderbird Cafe</h1>
                <h3 style={styles.subTitle}>McGaheysville, VA</h3>
                <p>An extensive menu of American fare, focused on breakfast, in a relaxed setting with a lunch counter.</p>
            </aside>
        </div>
    )
}
export default MyAds

const styles = {
    myAds: {
        display: 'flex',
        flexDirection: 'column',
        margin: '5%',
        padding: '1%',
        backgroundColor: '#424874',
        color: 'white',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0,  0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center'
    },
    title: {
        fontSize: '1.5rem',
        lineHeight: '2rem'
    },
    subTitle: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem'
    }
}