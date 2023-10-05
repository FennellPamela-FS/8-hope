import React from 'react';

// Dummy component
const MyAvatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
    );
}

export default MyAvatar;

const styles = {
    myAvatar: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}