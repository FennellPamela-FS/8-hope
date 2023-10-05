import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Icons
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";
import { GiExpense } from "react-icons/gi";

const DashNav = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/dashboard">
                <h1 style={styles.h1}>Dashboard</h1>
            </Link>
            <Link to="/reports" style={styles.a}><span style={styles.showIcon}><HiOutlineDocumentReport /></span>Reports</Link>
            <Link to="/income" style={styles.a}><span style={styles.showIcon}><GiReceiveMoney /></span>Income</Link>
            <Link to="/savings" style={styles.a}><span style={styles.showIcon}><MdOutlineSavings /></span>Savings</Link>
            <Link to="/spending" style={styles.a}><span style={styles.showIcon}><GiExpense /></span>Spending</Link>
        </nav>
    )
}

export default DashNav;

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        backgroundColor: '#DCD6F7',
        padding: '1.25rem 0',
        borderRight: '1px solid #A6B1E1',
    },
    h1: {
        color: '#424874',
        listStyleType: 'none',
        padding: '0 1.25rem',
    },
    showIcon: {
        padding: '0px 10px 10px 10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.25rem'
    }, a: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0',
        padding: '2rem 1.25rem',
        textDecoration: 'none',
        borderBottom: '1px solid #A6B1E1',
    }
}