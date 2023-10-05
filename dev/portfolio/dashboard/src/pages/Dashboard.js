import React, { useState } from 'react';
import ChartSmall from '../components/charts/ChartSmall';
import ChartMed from '../components/charts/ChartMed';
import ChartHorz from '../components/charts/ChartHorz';

// Dashboard hook component
function Dashboard() {
    const [chartHorz] = useState([
        { chartHeader: 'Income Overview' },
        { chartHeader: 'Savings Overview' }
    ]);
    const [chartSmall] = useState([
        { chartHeader: 'Income Overview' },
        { chartHeader: 'Savings Overview' },
        { chartHeader: 'Spending Overview' }
    ]);
    const [chartMed] = useState([
        {
            chartHeader: 'Income Overview',
            chartsubHeader: 'Income Received'
        },
        {
            chartHeader: 'Savings Overview',
            chartsubHeader: 'Savings Completed'
        },
        {
            chartHeader: 'Spending Overview',
            chartsubHeader: 'Spending Assigned'
        }
    ]);

    return (
        <div style={styles.container}>
            <section>
                <h1>Dashboard</h1>
                <p style={styles.chartHorz}>
                    {chartHorz.map((chartHorz, id) => (
                        <ChartHorz key={id} id={id} chartHorz={chartHorz} />
                    ))}
                </p>
            </section>
            <section>
                <p style={styles.chartSmall}>
                    {chartSmall.map((chartSmall, id) => (
                        <ChartSmall
                            key={id}
                            id={id}
                            chartSmall={chartSmall}
                        />
                    ))}
                </p>
            </section>
            <section>
                <p style={styles.chartMed}>
                    {chartMed.map((chartMed, id) => (
                        <ChartMed
                            key={id}
                            id={id}
                            chartMed={chartMed}
                        />
                    ))}
                </p>
            </section>
        </div>
    )
};
export default Dashboard;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        margin: '1%',
        padding: '3%',
    },
    chartHorz: {
        display: 'flex',
        flexDirection: 'row',
    },
    chartSmall: {
        display: 'flex',
        flexDirection: 'row',
    },
    chartMed: {
        display: 'flex',
        flexDirection: 'row',
    }
}