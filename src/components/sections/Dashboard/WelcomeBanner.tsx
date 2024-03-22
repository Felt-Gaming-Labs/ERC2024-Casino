// src/components/sections/Dashboard/WelcomeBanner.tsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  max-width: 200px; // Set a max-width for better appearance
  border-radius: 10px;
  padding: 15px 20px; // Increased padding for better visibility
  background: #ffffffdf;
  transition: background .2s ease;
  &:hover {
    background: white;
  }
  color: black;
  cursor: pointer;
  font-size: 1em; // Adjust font size as needed
  margin-top: 20px; // Add some space above the button
`;

const Welcome = styled.div`
  background: black; // Set background to black
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px; // Increased padding to give more space around contents

  & img {
    width: 100%; // Ensure the image covers the full width
    height: auto; // Adjust height automatically to maintain aspect ratio
    object-fit: cover; // Ensure the image covers the space without distortion
  }

  & > div {
    text-align: center; // Center-align the text within the div
  }
`;

export function WelcomeBanner() {
  const bannerImageUrl = 'https://i.imgur.com/SZixxaj.jpg';

  return (
    <Welcome>
      <img src={bannerImageUrl} alt="Felt Casino Banner" />
      <div>
        <h1>This Erection Matters</h1>
        <p>ERC24</p>
      </div>
      <Button onClick={() => window.open('https://jup.ag/swap/SOL-ERC24_5jNC4YHqF3x1HCuYXDCkxGhtikot8Pfjvr44uo16FeRq', '_blank')}>
        🪙 Buy $ERC24
      </Button>
    </Welcome>
  );
}
