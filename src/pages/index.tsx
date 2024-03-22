import React, { useEffect } from "react";

// src/pages/index.tsx
import Dashboard from "@/components/sections/Dashboard/Dashboard";
import Head from "next/head";
import Header from "@/components/layout/Header";
import RecentPlays from "@/components/sections/RecentPlays/RecentPlays";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ERC2024 Casino</title>
        <meta name="title" content="Erection 2024" />
        <meta
          name="description"
          content="ERC2024: This Erection, everything is at stake."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://casino.erection2024.club" />
        <meta
          property="og:title"
          content="ERC2024: This Erection, everything is at stake."
        />
        <meta
          property="og:description"
          content="ERC2024: This Erection, everything is at stake."
        />
        <meta
          property="og:image"
          content="https://gamba-v2-nextjs.vercel.app/logo.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://casino.erection2024.club"
        />
        <meta
          property="twitter:title"
          content="ERC2024: This Erection, everything is at stake."
        />
        <meta
          property="twitter:description"
          content="ERC2024: This Erection, everything is at stake."
        />
        <meta
          property="twitter:image"
          content="https://gamba-v2-nextjs.vercel.app/logo.svg"
        />
      </Head>
      <Header />
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <Dashboard />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
