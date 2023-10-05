import React, { useState } from 'react';

// Icons
import { GiReceiveMoney } from "react-icons/gi";

// Chart
import IncomeChart from '../components/charts/IncomeChart';

// Income hook component
function Income() {
    const [incomeChart] = useState([
        { chartHeader: 'Income Overview' }
    ]);

    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <span style={styles.showIcon}><GiReceiveMoney /></span>
                <h1 style={styles.h1}>Income</h1>
            </div>
            <p style={styles.incomeChart}>
                {incomeChart.map((incomeChart, id) => (
                    <IncomeChart key={id} id={id} incomeChart={incomeChart} />
                ))}
            </p>
        </section>
    );
}

export default Income;

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