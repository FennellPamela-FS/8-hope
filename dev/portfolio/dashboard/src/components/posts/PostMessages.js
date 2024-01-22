import React from 'react';
import MyAvatar from '../MyAvatar';
import AvatarIcon from '../../images/1female.png';

// images
import DriveImg from '../../images/mountDrive.jpg';

import { FaRegWindowClose } from 'react-icons/fa';
// dummy component
const PostMessages = () => { // this is tha callback function
    return (  // return the view
        <div style={styles.description}>
            <span style={styles.rightIcons}><FaRegWindowClose /></span>
            <article style={styles.myArticle}>
                <MyAvatar AvatarIcon={AvatarIcon} />
                <div style={styles.desc2}>
                    <h3>On vacation?!?</h3>
                    <p>Driving up to the mountains was a good idea, until I started driving up into the mountains!</p>
                    <img src={DriveImg} alt="The mountain drive has curves" />
                </div>
            </article>
        </div>
    )
}
export default PostMessages;

const styles = {
    description: {
        padding: '1%',
        margin: '0 2rem',
        backgroundColor: '#a6b1e1',
        borderRadius: '5px',
    },
    myArticle: {
        display: 'flex',
        flexDirection: 'row',
        margin: '1rem',
        padding: '0 1rem',
    },
    desc2: {
        display: 'flex',
        flexDirection: 'column',
        // padding: '0 1%',
        margin: '0 .5rem',
    },
    rightIcons: {
        color: '#424874',
        fontSize: '22px',
        width: '50px',
        height: '50px',
    }
}