import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

export default function Tagline() {
    return (
        <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
            <AlarmOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            {'Discover a Divine '}
            {/* <Link href="https://mui.com/material-ui/getting-started/templates/">templates</Link> */}
            {' Time to Pray.'}
        </Typography>
    );
}