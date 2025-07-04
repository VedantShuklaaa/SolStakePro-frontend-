"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

export default function second() {


    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-br from-[#150f35] via-black to-[#150f35]">
            <div className="border h-[80vh] w-[90vw] flex items-center justify-center gap-15 rounded-2xl backdrop-blur-2xl bg-white/5">
                <div className="h-[70vh] w-[25vw] rounded-2xl flex flex-col gap-2">
                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                            What is Proof of Stake?
                        </p>
                        <p className="text-md text-neutral-600 dark:text-neutral-400">
                            Across the Solana network, various individuals and organizations operate validator programs on specialized hardware. Validators serve a crucial function in preserving and protecting the Solana blockchain. Validators handle processing fresh network transactions and participate in voting to add new blockchain blocks.
                        </p>
                    </BackgroundGradient>

                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-7">
                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            Since global validators may receive varying information at different moments, the network must reach consensus on which transactions and data get continuously added to the blockchain. The method by which validators and the entire network achieve this agreement is called the consensus mechanism, representing a fundamental challenge in creating successful decentralized blockchain networks. Numerous projects have explored different approaches to achieve consensus rapidly and cost-effectively.
                        </p>
                    </BackgroundGradient>
                </div>
                <div className="h-[70vh] w-[55vw] rounded-2xl flex justify-between">
                    <div className="h-[70vh] w-[26.5vw] flex flex-col gap-9">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <span className="flex flex-col gap-2">
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    Solana employs a Proof of Stake consensus mechanism (commonly shortened to PoS). Each network validator can participate in consensus by voting for blocks they think should join the blockchain, thus validating any legitimate transactions within those specific blocks. Nevertheless, validator votes don't carry equal weight.
                                </p>
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    Validator consensus votes are stake-weighted, so validators with higher stake wield greater influence in determining consensus voting outcomes. Conversely, validators holding less stake possess reduced weight in affecting vote results, while validators without stake cannot impact consensus vote outcomes.
                                </p>
                            </span>
                        </BackgroundGradient>

                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <p className="text-base sm:text-xl xl:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
                                Are there risks associated with staking?
                            </p>
                            <p className="text-md text-neutral-600 dark:text-neutral-400">
                                Across numerous Proof-of-Stake networks, a mechanism called "slashing" exists. Slashing represents any procedure where portions of validator-delegated stake get destroyed as punishment for malicious validator behavior.
                            </p>
                        </BackgroundGradient>
                    </div>

                    <div className="h-[70vh] w-[26.5vw] flex flex-col gap-9">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <span className="flex flex-col gap-4">
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    Slashing creates risks for token holders who might lose tokens when delegating to slashed validators. Slashing presence may encourage token holders to delegate only to trustworthy validators, and avoid concentrating all tokens with single or few validators.
                                </p>
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    On Solana, slashing isn't automatic. If attackers cause network halts, they face slashing when the network restarts. For additional information, review the Solana Validator documentation.
                                </p>
                            </span>
                        </BackgroundGradient>

                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-4">
                            <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                                Where can I learn about the validators on Solana?
                            </p>
                            <span className="flex flex-col gap-2">
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Multiple community-built tools exist for viewing network information and individual validator performance metrics, including:
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex flex-col pl-10">
                                    <Link href='https://solanabeach.io/'>Solanabeach.io</Link>
                                    <Link href="https://www.validators.app/">Validators.app</Link>
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Many validators also chose to introduce themselves and their services on the Solana forums.
                                </p>
                            </span>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}