import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        savings: '5/12',
        click: 4000,
        sales: 2400,
        visits: 2400,
    },
    {
        savings: '6/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        savings: '7/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        savings: '8/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        savings: '9/12',
        click: 2000,
        sales: 9800,
        visits: 2290,
    },
    {
        savings: '10/12',
        click: 2780,
        sales: 3908,
        visits: 2000,
    },
    {
        savings: '11/12',
        click: 1890,
        sales: 4800,
        visits: 2181,
    },
    {
        savings: '12/12',
        click: 2390,
        sales: 3800,
        visits: 2500,
    },
];

const SavingsChart = ({ savingsChart }) => {
    return (
        <article key={savingsChart.id} style={styles.card}>
            <h1 style={styles.h1}>{savingsChart.chartHeader}</h1>
            <BarChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="savings" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="click" stackId="a" fill="#8884d8" />
                <Bar dataKey="sales" stackId="a" fill="#82ca9d" />
                <Bar dataKey="visits" fill="#ffc658" />
            </BarChart>
        </article>
    )
};
export default SavingsChart;

const styles = {
    h1: {
        borderBottom: '1px solid #474044'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2',
        transition: '0.3s',
        minHeight: '100%',
        width: '100%',
        backgroundColor: 'white',
        margin: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        textAlign: 'center',
    }
}