// Footer.js
import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>

    <Stack direction="row" gap="20px" justifyContent="center" mt="20px" flexWrap="wrap">
      <Link href="/" color="inherit" sx={{ textDecoration: 'none', fontSize: { lg: '18px', xs: '16px' } }}>Home</Link>
      <Link href="/about" color="inherit" sx={{ textDecoration: 'none', fontSize: { lg: '18px', xs: '16px' } }}>About</Link>
      <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', fontSize: { lg: '18px', xs: '16px' } }}>Contact</Link>
      <Link href="/privacy" color="inherit" sx={{ textDecoration: 'none', fontSize: { lg: '18px', xs: '16px' } }}>Privacy Policy</Link>
    </Stack>

    <Stack direction="row" gap="20px" justifyContent="center" mt="20px" flexWrap="wrap">
      <Typography variant="body1" sx={{ fontSize: { lg: '16px', xs: '14px' } }}>
        <Link href="mailto:info@fitness.com" color="inherit" sx={{ textDecoration: 'none' }}>info@fitness.com</Link>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { lg: '16px', xs: '14px' } }}>
        <Link href="tel:+123456789" color="inherit" sx={{ textDecoration: 'none' }}>+123 456 789</Link>
      </Typography>
    </Stack>

    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      Made with ❤️ By Mohamed Wael
    </Typography>
  </Box>
);

export default Footer;
