import React from 'react';
import MyBtn from './buttons/MyBtn';

const GroceryForm = props => {
    return (
        <form style={styles.myForm} onSubmit={props.addItem}>
            <div style={styles.inputContainer}>
                <input
                    name="gName"
                    value={props.gName}
                    onChange={props.getInput}
                    style={styles.input}
                    placeholder="Name"
                />
                <input
                    name="gDesc"
                    value={props.gDesc}
                    onChange={props.getInput}
                    style={styles.input}
                    placeholder="Description"
                />
                <input
                    name="gImg"
                    value={props.gImg}
                    onChange={props.getInput3}
                    style={styles.input}
                    placeholder="Image"
                />
                {/* pass the props up through MyBtn to the parent App.js  */}
                <MyBtn {...props} />
            </div>
        </form >
    )
}

export default GroceryForm

const styles = {
    myForm: {
        justifyContent: 'space-around',
        width: '100%',
        margin: '1%',
        padding: '2%',
        fontWeight: 'bold',
        color: 'rgb(163,173,194)',
        borderRadius: '2%'
    },
    input: {
        padding: '2%',
        margin: '1%'
    },
    inputContainer: {
        // width: '30%',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        margin: '1%',
        padding: '2%',
        backgroundColor: '#d6e5e3',
        borderRadius: '2%'
    }
}
