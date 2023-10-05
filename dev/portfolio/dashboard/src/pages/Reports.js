import React, { useState } from 'react';

// Icons
import { HiOutlineDocumentReport } from "react-icons/hi";

// Chart
import ReportsChart from '../components/charts/ReportsChart';

// Reports hook component
function Reports() {
    const [reportsChart] = useState([
        { chartHeader: 'Reports Overview' },
        // { chartHeader: 'Missions Overview' }
    ]);

    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <span style={styles.showIcon}><HiOutlineDocumentReport /></span>
                <h1 style={styles.h1}>Reports</h1>
            </div>
            <p style={styles.reportsChart}>
                {reportsChart.map((reportsChart, id) => (
                    <ReportsChart key={id} id={id} reportsChart={reportsChart} />
                ))}
            </p>
        </section>
    );
}

export default Reports;

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