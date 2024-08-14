"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <html lang="en">
      <head>
        <Head>
          <title>GREEN ENERGY</title>
          <meta name="description" content="Microdose Muse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}