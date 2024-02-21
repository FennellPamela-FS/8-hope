import { Button, CardActions } from '@mui/material'
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link'; import React from 'react'

const SeeTimes = () => {
    return (

        <CardActions>
            {/* <Button size="small">See times</Button> */}
            <Link component={NextLink} href="/content">See times</Link>
        </CardActions>

    )
}

export default SeeTimes