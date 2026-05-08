import React from 'react'

import HomeCarousel from '../components/HomeCarousel';
import HomeInput from '../components/HomeInput';

function HomePage() {
  return (
    <main className="min-h-svh w-screen bg-[#0d1f15] px-6 pt-10 text-[#F2E9D6]">
      <HomeInput />
      <HomeCarousel />
    </main>
  );
}

export default HomePage
