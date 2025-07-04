'use client';
import React from 'react'
import { Container } from './container';
import { Title } from "@/components/title";
import { ModeToggle } from "@/components/theme-button";
import Link from 'next/link';

export const Navbar = () => {

    const navItems = [
        {
            title: 'Home',
            href: '/',
        },{
            title: 'About Staking',
            href: '/about',
        },{
            title: 'Calculator',
            href: '/Calulator'
        }
    ]

    return (
        <div className=''> 
            <Container className='bg-black/20 border border-black/20 dark:border-white/10 h-15 xl:w-6xl rounded-2xl flex items-center justify-between p-2' >
                <div>
                    <Title/>
                </div>
                <div className='h-full flex items-center justify-center gap-20'>
                    {navItems.map((Item, index) => (
                        <Link href={Item.href} key={index} className='xl:text-2xl hover:text-[#7393e6]' prefetch>
                            {Item.title}
                        </Link>
                    ))}
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </Container>
        </div>
    )
}
