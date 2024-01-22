import React, { useState } from 'react';

// Icons
import { GiExpense } from "react-icons/gi";

// Chart
import SpendingChart from '../components/charts/SpendingChart';

// Spending hook component
function Spending() {
    const [spendingChart] = useState([
        { chartHeader: 'Spending Overview' }
    ]);

    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <span style={styles.showIcon}><GiExpense /></span>
                <h1 style={styles.h1}>Spending</h1>
            </div>
            <p style={styles.spendingChart}>
                {spendingChart.map((spendingChart, id) => (
                    <SpendingChart key={id} id={id} spendingChart={spendingChart} />
                ))}
            </p>
        </section>
    );
}

export default Spending;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        margin: '1%',
        padding: '3%',
    },
    showIcon: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '2rem'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
    },
    h1: {
        paddingLeft: '20px',
    }
}