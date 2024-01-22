import React, { useState } from 'react';

// Icons
import { MdOutlineSavings } from "react-icons/md";

// Chart
import SavingsChart from '../components/charts/SavingsChart';

// Savings hook component
function Savings() {
    const [savingsChart] = useState([
        { chartHeader: 'Savings Overview' }
    ]);

    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <span style={styles.showIcon}><MdOutlineSavings /></span>
                <h1 style={styles.h1}>Savings</h1>
            </div>
            <p style={styles.savingsChart}>
                {savingsChart.map((savingsChart, id) => (
                    <SavingsChart key={id} id={id} savingsChart={savingsChart} />
                ))}
            </p>
        </section>
    );
}

export default Savings;

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