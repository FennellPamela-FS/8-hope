// app/(site)/pages.js
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';

export const metadata = {
    title: 'Site Page',
    description: 'This is the site page',
};

export default function SitePage() {
    return (
        <div>
            <div>Site Page</div>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
    );
}