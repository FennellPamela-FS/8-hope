import Image from "next/image";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import CustomSlider from './components/CustomSlider';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tagline from '@/components/Tageline';
import Copyright from '@/components/Copyright';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <main className={styles.container}>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Box
          sx={{
            p: 2,
            borderRadius: 8,
            bgcolor: '#D8D8D8',
            width: '128px',
            height: '128px',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 2,
          }}
        />
        <h1 sx={{ mb: 2 }}>
          8 Hope
        </h1>
        <Tagline />
        <Box sx={{ maxWidth: 'sm' }}>
          <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/content">
            Get Started
          </Button>
        </Box>
        <Copyright />
      </Box>
      <div>Welcome Page</div>
      <Link component={NextLink} href="/">To Home page</Link>
      {/* <Link href="/">
                To Home page
            </Link> */}
    </main>
  );
}
