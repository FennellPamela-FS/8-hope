import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        month: 'Dec',
        $: 590,
        spent: 800,
        amt: 1400,
    },
    {
        month: 'Jan',
        $: 868,
        spent: 967,
        amt: 1506,
    },
    {
        month: 'Feb',
        $: 1397,
        spent: 1098,
        amt: 989,
    },
    {
        month: 'Mar',
        $: 1480,
        spent: 1200,
        amt: 1228,
    },
    {
        month: 'Apr',
        $: 1520,
        spent: 1108,
        amt: 1100,
    },
    {
        month: 'May',
        $: 1400,
        spent: 680,
        amt: 1700,
    },
];

const SpendingChart = ({ spendingChart }) => {
    return (
        <article key={spendingChart.id} style={styles.card}>
            <h1 style={styles.h1}>{spendingChart.chartHeader}</h1>
            <ComposedChart
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" label={{ value: 'Spending', position: 'insideBottomRight', offset: 0 }} scale="band" />
                <YAxis label={{ value: 'Budget', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="spent" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="$" stroke="#ff7300" />
            </ComposedChart>
        </article>
    )
};
export default SpendingChart;

const styles = {
    h1: {
        borderBottom: '1px solid #474044'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2',
        transition: '0.3s',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        margin: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        textAlign: 'center',
    }
}