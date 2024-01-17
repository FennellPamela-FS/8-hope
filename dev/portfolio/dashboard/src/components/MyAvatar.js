import React from 'react';

const MyAvatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.MyAvatar} />
    )
};
export default MyAvatar;

const styles = {
    MyAvatar: {
        height: '75px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
};