import React from 'react';

// Component to Bind Data with placeholders 
const DataBindingDemo = () => { // this is tha callback function

    return (  // return the view
        <div className="dummy">
            <form>
                <input type="text" placeholder="Search..."
                    style={styles.input}
                    onChange={this.changeInputText} />
            </form>
            <p>New info: {this.state.databinding}</p>
        </div>
    )
}
export default DataBindingDemo

const styles = {
    input: {
        padding: '2%',
        margin: '1%'
    }
}
