import React from 'react';
import MyBtn from './buttons/MyBtn';

const Form = props => {
    return (
        <form style={styles.myForm} onSubmit={props.addTitle}>
            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    placeholder="Post Title"
                />

                <textarea
                    style={styles.inputTextArea}
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="Post Description"
                    defaultValue={''}
                />
                <p style={styles.p}>
                    Enter a brief description for your post.
                </p>
                <MyBtn btnText="Post" />
            </div>
        </form >
    )
}
export default Form

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
    inputTextArea: {
        padding: '2%',
        margin: '1%'
    },
    inputContainer: {
        // width: '30%',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around', margin: '1%',
        padding: '2%',
        backgroundColor: '#d6e5e3',
        borderRadius: '2%'
    },
    p: {
        marginTop: '1.25rem',
        fontSize: '12px',
        color: '#424874'
    }
}
