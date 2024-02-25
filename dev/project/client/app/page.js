import Image from "next/image";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import CustomSlider from './components/CustomSlider';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tagline from '@/components/Tagline';
import Copyright from '@/components/Copyright';
import Logo from "@/components/Logo";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <main className={styles.container}>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - Next.js App Router example in JavaScript
          </Typography>
          <Link href="/about" color="secondary" component={NextLink}>
            Go to the about page
          </Link>
          <Copyright />
        </Box>
      </Container>
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
        <Logo />
        {/*         <h1 sx={{ mb: 2 }}>
          8 Hope
        </h1> */}
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
