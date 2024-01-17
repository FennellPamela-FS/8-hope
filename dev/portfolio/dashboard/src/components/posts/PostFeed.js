import React from 'react';

// dummy component
const PostFeed = () => { // this is tha callback function
    return (  // return the view
        <div style={styles.description}>
            <h1>Hey! What's on your mind today?</h1>
        </div>
    )
}
export default PostFeed;

const styles = {
    description: {
        padding: '0 1%',
        margin: '0 2rem',
    }
}