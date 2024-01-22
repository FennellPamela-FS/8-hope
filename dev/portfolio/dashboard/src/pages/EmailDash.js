import React from 'react';

function EmailDash() {
    return (
        <section style={styles.container}>
            <h1>Email Dash</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}
export default EmailDash;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        color: 'green',
        margin: '1%',
        padding: '3%',
    }
}