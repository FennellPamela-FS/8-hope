import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';

const AllSet = () => {
    <Box sx={{ maxWidth: 'sm', mt: 1.5 }} >
        <Button variant="contained" component={NextLink} href="/finish">
            Continue
        </Button>
    </Box>
}

export default AllSet