import React from 'react';

// images
import ImageURL from '../images/1female.png';
import LogoImg from '../images/logo512.png';

// icons
import MyIcons from './MyIcons';
import { FaBell, FaSearch } from 'react-icons/fa';
import { FiSettings } from "react-icons/fi";


// buttons
// import ButtonSmall from '../components/buttons/ButtonSmall';

// Logo
import MyLogo from './MyLogo';

const MyHeader = props => {
    return (
        <header style={styles.myHeader}>
            <MyLogo LogoImg={LogoImg} LogoAlt="Alt tag" style={styles.logo} />
            <h1>03 Routing</h1>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><FaSearch /></span>
                <input type="text" placeholder="Search..." style={styles.inputWithIcon} />
            </div>
            <div style={styles.rightSide}>
                <span style={styles.rightIcons}><FaBell /></span>
                <span style={styles.rightIcons}><FiSettings /></span>
                <MyIcons IconImg={ImageURL} ImageAlt="Alt Tag" />
            </div>
        </header>
    )
}

export default MyHeader;

const styles = {
    myHeader: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.25rem 1.25rem',
        justifyContent: 'space-between',
        justifyItems: 'center',
        backgroundColor: '#424874',
        color: '#dcd6f7',
        alignItems: 'center',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, .1)',
        // border: '0px 0px 1px 0px solid'
        borderBottom: '8px solid #A6B1E1',

    },
    myBranding: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
    },
    logo: {
        borderRadius: '50%',
        height: '50px',
        width: '60px',
        marginRight: '10%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%'
    },
    inputIcon: {
        background: '#fff',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem'
    },
    inputWithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px'
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%'
    },
    rightIcons: {
        color: '#DCD6F7',
        backgroundColor: '#424874',
        paddingTop: '25px',
        fontSize: '22px',
        width: '50px',
        height: '50px'
    }
}

