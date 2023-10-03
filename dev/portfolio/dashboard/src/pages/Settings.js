import React from 'react';

// Icons
import { FiSettings } from "react-icons/fi";

// Chart

// Settings hook component
function Settings() {
    // const [settingsChart] = useState([
    //     { chartHeader: 'Settings Overview' }
    // ]);

    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <span style={styles.showIcon}><FiSettings /></span>
                <h1 style={styles.h1}>Settings</h1>
            </div>
            <p>Place your settings content here</p>
        </section>
    );
}

export default Settings;

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