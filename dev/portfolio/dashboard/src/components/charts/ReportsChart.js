import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
        reports: '5/12',
        click: 4000,
        sales: 2400,
        visits: 2400,
    },
    {
        reports: '6/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        reports: '7/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        reports: '8/12',
        click: 3000,
        sales: 1398,
        visits: 2210,
    },
    {
        reports: '9/12',
        click: 2000,
        sales: 9800,
        visits: 2290,
    },
    {
        reports: '10/12',
        click: 2780,
        sales: 3908,
        visits: 2000,
    },
    {
        reports: '11/12',
        click: 1890,
        sales: 4800,
        visits: 2181,
    },
    {
        reports: '12/12',
        click: 2390,
        sales: 3800,
        visits: 2500,
    },
];

const ReportsChart = ({ reportsChart }) => {
    return (
        <article key={reportsChart.id} style={styles.card}>
            <h1 style={styles.h1}>{reportsChart.chartHeader}</h1>
            <AreaChart
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="reports" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="click" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="visits" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </article>
    )
};
export default ReportsChart;

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