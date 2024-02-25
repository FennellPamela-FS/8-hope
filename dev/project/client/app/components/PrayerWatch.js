import React from 'react'
import { Box, Typography } from '@mui/material/';

const PrayerWatch = ({ watch }) => {
    return (
        // <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        //     <Typography variant='h4'>{watch}</Typography>
        // </Box>
        <Box className='max-w-xl space-y-3 mx-auto p-4 bg-white shadow-md'>
            <Typography variant='h4' component='h2' className='text-lg font-bold'>
                {watch.title}
            </Typography>
            <Typography variant='body1' className='text-base'>
                {watch.description}
            </Typography>
            <Typography variant='body2' className='text-sm'>
                Scripture Reference: {watch.scriptureReference}
            </Typography>
        </Box>
    )
}

export default PrayerWatch;