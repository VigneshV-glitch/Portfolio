import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { DesignPhilosophy } from '../components/DesignPhilosophy';
import { SelectedWork } from '../components/SelectedWork';
import { WhatIDo } from '../components/WhatIDo';
import { ToolsTech } from '../components/ToolsTech';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  return (
    <main>
      <Hero onOpenContact={onOpenContact} />
      <AboutSnapshot />
      <DesignPhilosophy />
      <SelectedWork />
      <WhatIDo />
      <ToolsTech />
      <FinalCTA onOpenContact={onOpenContact} />
    </main>
  );
};
