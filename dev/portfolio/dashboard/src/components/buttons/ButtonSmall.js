import React from 'react';
import styled from 'styled-components';

// Dummy component
const ButtonSmall = props => {
    return (
        <Small>
            {props.btnText}
        </Small>
    )
}
export default ButtonSmall

const Small = styled.button`
    font-size: 2rem;
    color: red;
    &:hover {
        color: purple; // <Thing> when hovered
    }
    & ~ & {
        background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
        background: lime; // <Thing> next to <Thing>
    }

    &.something {
        background: orange; // <Thing> inside another element labeled ".something-else"
    }

    .something-else & {
        border: 1px solid; // <Thing> tagged with an additional CSS class
    }
`

// const styles = {
//     btnStyle: {
//         border: '2px solid rgba(143,202,249)',
//         color: '#0066CC',
//         fontWeight: 'bold',
//         borderRadius: '50%',
//         padding: '1%',
//         with: '50px',
//         height: '50px'
//     }
// }