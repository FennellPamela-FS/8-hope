import React from 'react';
import MyAds from './MyAds';

const RightNav = () => {
    return (
        <nav style={styles.rightNav}>
            <h1 style={styles.h1}>Advertisements</h1>
            <MyAds />
        </nav>

    )
}

export default RightNav;

const styles = {
    rightNav: {
        display: 'flex',
        flexDirection: 'column',
        // maxWidth: '28rem',
        width: '20rem',
        backgroundColor: '#D6E5E3',
        padding: '1.25rem 1rem',
        borderLeft: '1px solid #CACFD6'
    },
    h1: {
        color: '#424874',
        listStyleType: 'none',
        padding: '0 1.25rem',
    }
}