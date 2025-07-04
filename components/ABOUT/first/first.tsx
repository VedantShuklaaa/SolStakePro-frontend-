"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";



export default function first() {

    const Points = [
        {
            point: "SOL holders can generate rewards and contribute to network security by delegating tokens to validators on Solana's mainnet beta."
        }, {
            point: "Staking yields depend on current inflation rates, total network SOL staked, and individual validator performance and fees."
        }, {
            point: "Solana begins with 8% annual inflation, declining 15% yearly until stabilizing at a permanent 1.5% annual rate."
        }, {
            point: "Staking involves SOL holders (like exchange purchasers) delegating tokens to specific validators, thereby boosting those validators' voting power."
        }
    ]

    return (
        <div className="h-[100vh] w-full flex items-center justify-center bg-gradient-to-bl from-[#150f35] via-black to-[#150f35]">
            <div className="border h-[80vh] w-[90vw] flex items-center justify-center gap-15 rounded-2xl backdrop-blur-2xl bg-white/5 mt-20">
                <div className="h-[70vh] w-[25vw] rounded-2xl flex flex-col gap-4">
                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Staking and Inflation FAQ
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Solana's validator community activated staking rewards and inflation through a blockchain-based governance vote, and these features are now operational.
                        </p>
                    </BackgroundGradient>

                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-7">
                        {Points.map((Items, idx) => (
                            <p className="text-md text-neutral-600 dark:text-neutral-400" key={idx}>
                                {Items.point}
                            </p>
                        ))}
                    </BackgroundGradient>
                </div>
                <div className="h-[70vh] w-[55vw] rounded-2xl flex justify-between">
                    <div className="h-[70vh] w-[26.5vw] flex flex-col items-center justify-center gap-2">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-4">
                            <p className="text-base sm:text-xl xl:text-5xl text-black mb-2 dark:text-neutral-200">
                                Why Stake?
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                In an open and decentralized network like Solana, anyone can run a validator if they choose. Malicious validators or bad actors might try attacking the network or submitting fraudulent transactions for profit. Due to Proof of Stake consensus, any single entity acting fraudulently must first attract stake before their proposals influence consensus voting. As more token holders distribute their SOL across various validators and total network stake grows, it becomes harder for coordinated, well-funded attackers to accumulate sufficient stake to manipulate consensus outcomes. Simply put, wider stake distribution among multiple validators enhances network security for all users. Furthermore, token holders who stake and help secure the network earn staking rewards.
                            </p>
                        </BackgroundGradient>
                    </div>

                    <div className="h-[70vh] w-[26.5vw] flex flex-col gap-4">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <p className="text-base sm:text-xl xl:text-3xl text-black mb-2 dark:text-neutral-200">
                                How do I stake my tokens?
                            </p>
                            <span className="flex flex-col gap-7">
                                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                    Staking SOL requires a compatible wallet, as not all wallets currently support staking. SolFlare.com offers user-friendly staking functionality. Consult official documentation for supported wallet options.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                    Wallet SOL must be transferred into stake accounts first. You can create unlimited stake accounts with any SOL amount desired. Each stake account has a distinct address, with one wallet managing multiple accounts. Review our stake account structure documentation for additional information.
                                </p>
                            </span>
                        </BackgroundGradient>

                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                To earn staking rewards (when mainnet beta inflation is active), stake account tokens must be delegated to validators. Each stake account can only delegate to one validator simultaneously, requiring multiple stake accounts for diversified validator delegation.
                            </p>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}