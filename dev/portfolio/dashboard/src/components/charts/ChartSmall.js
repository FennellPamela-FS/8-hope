import React from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
    { name: 'Anita', value: 400 },
    { name: 'Brenda', value: 300 },
    { name: 'Clinton', value: 300 },
    { name: 'Debra', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];


const ChartSmall = ({ chartSmall }) => {
    return (
        <article key={chartSmall.id} style={styles.card}>
            <h1 style={styles.h1}>{chartSmall.chartHeader}</h1>
            <h2>{chartSmall.chartsubHeader}</h2>
            <PieChart width={350} height={250}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </article>
    )
};
export default ChartSmall;

const styles = {
    h1: {
        borderBottom: '1px solid #474044'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2',
        transition: '0.3s',
        // minHeight: '100%',
        width: '40%',
        backgroundColor: 'white',
        margin: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        textAlign: 'center',
        borderBottom: '1px solid red',
    }
}