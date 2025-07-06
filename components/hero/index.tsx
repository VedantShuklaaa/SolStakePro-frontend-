import React from 'react'
import Image from 'next/image';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import Link from 'next/link';
import { Container } from '../container';

export const Hero = () => {

    const cards = [
        {
            image: '/trending-up.png',
            title: 'Accurate Returns',
            description: 'Calculate precise staking rewards based on real-time APY rates',
        }, {
            image: '/shield.png',
            title: 'Validator Analysis',
            description: 'Compare different validators and their commission rates',
        }, {
            image: '/users.png',
            title: 'Smart Planning',
            description: 'Plan your staking strategy with detailed projections and accuracy',
        }
    ]

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='h-[100vh] w-full flex justify-center items-center bg-gradient-to-tr from-[#150f35] via-black to-[#150f35]'>
                <div className='h-[100vh] w-full flex flex-col justify-center items-center '>
                    <div className='h-[70vh] w-[70vw] flex flex-col items-center '>
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-7xl text-center h-40 w-120 mt-10">
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#9234EA] to-[#2662EB]'>Solana Staking</span> Calculator
                        </p>
                        <p className='xl:text-2xl w-220 text-center'>
                            Calculate your potential Solana staking rewards with precision. Understand your returns, compare validators, and make informed staking decisions.
                        </p>
                        <div className='flex gap-4 mt-10'>
                            <HoverBorderGradient className='h-12 w-50 flex justify-center items-center text-xl cursor-pointer'><Link href="/calculator">Start Calculating</Link></HoverBorderGradient>
                            <HoverBorderGradient className='h-12 w-60 flex justify-center items-center text-xl cursor-pointer'><Link href="/about">Learn About Staking</Link></HoverBorderGradient>
                        </div>
                        <div className='flex gap-10 mt-15'>
                            {cards.map((Items, idx) => (
                                <Container className='h-[25vh] w-[15vw] flex flex-col items-center justify-center gap-2 rounded-2xl border bg-white/5 backdrop-blur-2xl' key={idx}>
                                    <div className=' h-18'><Image src={Items.image} height={50} width={50} alt='no image'/></div>
                                    <div className='flex text-center text-3xl font-bold'>{Items.title}</div>
                                    <div className='flex text-center text-xl w-60 font-light'>{Items.description}</div>
                                </Container>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
