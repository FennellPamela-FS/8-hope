import React from 'react';

function FormDash() {
    return (
        <section style={styles.container}>
            <h1>Dashboard Form</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}
export default FormDash;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        margin: '1%',
        padding: '3%',
    }
}