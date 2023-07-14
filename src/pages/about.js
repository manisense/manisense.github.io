import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import PriceCard from "@/components/PriceCard";
import Animated from "@/components/Animated";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Skills from "@/components/Skills";
const about = () => {
  return (
    <>
      <main className="h-full">
        <Skills />
        <Pricing />
      </main>
    </>
  );
};

export default about;
