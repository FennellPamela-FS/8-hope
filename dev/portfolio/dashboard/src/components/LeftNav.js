import React from 'react';

const Nav = () => {
    return (
        <nav style={styles.leftNav}>
            <h1 style={styles.h1} >Nav</h1>
            <a style={styles.a} href="#newsfeed">Newsfeed</a>
            <a style={styles.a} href="#messages">Messages</a>
            <a style={styles.a} href="#watch">Watch</a>
        </nav>
    )
}

export default Nav;

const styles = {
    leftNav: {
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        backgroundColor: '#DCD6F7',
        padding: '1.25rem 0',
        borderRight: '1px solid #A6B1E1',
    },
    h1: {
        color: '#424874',
        listStyleType: 'none',
        padding: '0 1.25rem',

    },
    a: {
        margin: '0',
        padding: '2rem 1.25rem',
        textDecoration: 'none',
        borderBottom: '1px solid #A6B1E1',
    }
}