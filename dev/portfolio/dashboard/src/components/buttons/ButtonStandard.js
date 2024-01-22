import React from 'react';

// Dummy component
const ButtonStandard = props => {
    return (
        <button style={styles.btnStyle} >
            {props.btnText}
        </button>
    )
}
export default ButtonStandard;

const styles = {
    btnStyle: {
        border: '2px solid rgba(143,202,249)',
        color: '#0066CC',
        fontWeight: 'bold',
        borderRadius: '10%',
        padding: '1%',
        margin: '1%',
        cursor: 'pointer'
    }
}