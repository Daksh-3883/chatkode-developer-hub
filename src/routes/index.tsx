import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/chatkode/Navbar";
import { Hero } from "@/components/chatkode/Hero";
import { WhatIs } from "@/components/chatkode/sections/WhatIs";
import { Pipeline } from "@/components/chatkode/sections/Pipeline";
import { Mathematics } from "@/components/chatkode/sections/Mathematics";
import { Coding } from "@/components/chatkode/sections/Coding";
import { Algorithms } from "@/components/chatkode/sections/Algorithms";
import { Developers } from "@/components/chatkode/sections/Developers";
import { Approach, KodeDevelopers } from "@/components/chatkode/sections/Approach";
import { FinalCTA, Footer } from "@/components/chatkode/sections/FinalCTA";

const title = "ChatKode — AI for Code, Mathematics & Algorithms";
const description =
  "ChatKode is a developer-focused AI from Kode Developers, built for coding, mathematics, algorithms and technical problem solving.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <h1 className="sr-only">
          ChatKode — a developer-focused AI for code, mathematics and algorithms
        </h1>
        <Hero />
        <WhatIs />
        <Pipeline />
        <Mathematics />
        <Coding />
        <Algorithms />
        <Developers />
        <Approach />
        <KodeDevelopers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
