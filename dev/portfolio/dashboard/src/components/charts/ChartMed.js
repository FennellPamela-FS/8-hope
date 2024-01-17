import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ChartMed = ({ chartMed }) => {
    return (
        <article key={chartMed.id} style={styles.card}>
            <h1 style={styles.h1}>{chartMed.chartHeader}</h1>
            <h2>{chartMed.chartsubHeader}</h2>
            <LineChart
                width={360}
                height={50}
                data={data}>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </article>
    )
};
export default ChartMed;

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