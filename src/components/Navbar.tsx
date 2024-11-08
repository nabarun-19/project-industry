'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link"; // Import Link component

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">

                    <MenuItem setActive={setActive} active={active} item="Home">


                    </MenuItem>
                </Link>


                <Link href="/">

                    <MenuItem setActive={setActive} active={active} item="Tutoring">
                        <div className="flex flex-col space-y-4 text-sm">
                            {/* Use Link component instead of a tags */}
                            <HoveredLink href="/learning">Collaborative learning</HoveredLink>
                            <HoveredLink href="/progression">Skill based Progression</HoveredLink>
                           
                            
                        </div>
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />

                    </div>
                </MenuItem>
                
                <Link href="/mentor">

<MenuItem setActive={setActive} active={active} item="Mentor Selection">


</MenuItem>
</Link>

                <Link href="/dashboard">

                <MenuItem setActive={setActive} active={active} item="Dashboard">
                        <div className="flex flex-col space-y-4 text-sm">
                            {/* Use Link component instead of a tags */}
                            <HoveredLink href="/progress"> Learner Progress Tracking</HoveredLink>
                            <HoveredLink href="/Performance">Course Performance Metrics</HoveredLink>
                            <HoveredLink href="/visualization"> Data Visualizations</HoveredLink>
                            
                        </div>
                    </MenuItem>
                </Link>
               

                <Link href="/contact">

                    <MenuItem setActive={setActive} active={active} item="Contact Us">


                    </MenuItem>
                </Link>


            </Menu>
        </div>
    );
}

export default Navbar;