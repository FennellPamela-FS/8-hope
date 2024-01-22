import React from 'react';

// Dummy component
const MyBtn = props => {
    return (
        <button style={styles.redBtn} >
            {props.btnText}
        </button>
    )
}
export default MyBtn

const styles = {
    redBtn: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(143,202,249)',
        color: '#0066CC',
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer'
    }
}