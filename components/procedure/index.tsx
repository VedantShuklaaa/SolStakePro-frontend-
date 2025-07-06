'use client';
import React from 'react'
import { motion } from "framer-motion";

export const Procedure = () => {

    const Path = [
        {
            title: "Step 1",
            description: "Choose a Validator.",
        },
        {
            title: "Step 2",
            description: "Enter the Annual Percentage Yield (APY) your validator is providing.",
        },
        {
            title: "Step 3",
            description: "Enter Validator's commission.",
        },
        {
            title: "Step 4",
            description: "Enter the amount of Staked Solana.",
        },
        {
            title: "Step 5",
            description: "Enjoy the rewards on unstaking the Solana next time.",
        },
    ];

    return (
        <div className='h-[120vh] flex items-center justify-center'>
            <div className='h-[120vh] w-full flex justify-center items-center bg-gradient-to-br from-[#150f35] via-black to-[#150f35]'>
                <div className='border border-zinc-800 h-[100vh] w-[70vw] rounded-2xl backdrop-blur-2xl bg-white/5'>
                    <section className="py-10">
                        <div >
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl md:text-4xl font-display font-medium mb-6"
                                >
                                    Steps to earn through Sol Staking
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    Follow the given steps to start earning Solana through Staking.
                                </motion.p>
                            </div>

                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
                                <div className="space-y-12 relative">
                                    {Path.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className={`flex cursor-pointer items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                                }`}
                                        >
                                            <div className={`w-1/2 px-8 rounded-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                                <div className="backdrop-blur-2xl rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                                    <h3 className="text-xl font-display font-medium mb-2 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-xl">{item.description}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-700 text-white font-medium text-sm backdrop-blur-2xl hover:shadow-lg transition-shadow duration-300">
                                            </div>
                                            <div className="w-1/2"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
