"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./ui/darkmode";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Avio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground hover:text-primary transition"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition"
            >
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary text-primary hover:text-primary/70 hover:bg-primary/70 bg-transparent"
            >
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/70 text-primary-foreground">
              Start Free Trial
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#features"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:text-primary/70 hover:bg-primary/70 bg-transparent"
              >
                <Link href={"/sign-in"}>Sign In</Link>
              </Button>
              <Button className="flex-1 bg-primary text-primary-foreground text-sm">
                Start Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
