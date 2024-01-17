import React from 'react';

// ChartDash hook component
function ChartDash() {
    return (
        <section style={styles.container}>
            <p>Logo Placeholder</p>
            <h1>ChartDash</h1>
            <p>Place your charts here</p>
        </section>
    );
}

export default ChartDash;

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