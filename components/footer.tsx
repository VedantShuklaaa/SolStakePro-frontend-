import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='h-[30vh] w-full flex justify-center items-center'>
            <div className='h-[30vh] w-[50vw] flex flex-col items-center justify-center gap-3 border backdrop-blur-2x bg-gradient-to-tr from-[#150f35] to-black'>
                <span className='flex flex-col items-center justify-center'>
                    <p className='text-white text-xl'>
                        Managed by
                    </p>
                    <p className='font-bold xl:text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-600'>
                        SolStake Pro
                    </p>
                </span>
                <p className='font-light '>
                    © 2025 SolStake Pro. All rights reserved.
                </p>
            </div>
            <div className='h-[30vh] w-[50vw] flex flex-col justify-center items-center border backdrop-blur-2xl bg-white/5 bg-gradient-to-tl from-[#150f35] to-black'>

            </div>
        </div>
    )
}
