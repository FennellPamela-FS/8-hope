import React from 'react';

import MyBtn from './buttons/MyBtn';
import { FaBook } from 'react-icons/fa';

// Dummy component
const MyForm = props => {
    return (
        // when user clicks the button it will send addName to App.js
        <form style={styles.myForm} onSubmit={props.addName}>
            <div style={styles.inputContainer}>
                <input style={styles.input} placeholder="First Name" />
                <input style={styles.input} placeholder="Last Name" />
            </div>
            <div style={styles.inputContainer}>
                <input style={styles.input} placeholder="Address" />
                <input style={styles.input} placeholder="City" />
            </div>
            <div style={styles.inputContainer}>
                <input style={styles.input} placeholder="State" />
                <input style={styles.input} placeholder="Zip Code" />
            </div>
            <div style={styles.inputContainer}>
                <input style={styles.input} placeholder="Email" />
                <input style={styles.input} placeholder="Phone" />
            </div>
            <MyBtn btnIcon={<FaBook />} btnText="Save" />
            <MyBtn btnIcon={<FaBook />} btnText="Cancel" />
        </form>
    )
};
export default MyForm;

const styles = {
    myForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        width: '30%',
        margin: '1%',
        padding: '2%',
        fontWeight: 'bold',
        backgroundColor: 'rgb(163,173,194, 0.5)',
        color: 'rgb(163,173,194)',
        borderRadius: '2%'
    },
    input: {
        padding: '2%',
        margin: '1%'
    }
}