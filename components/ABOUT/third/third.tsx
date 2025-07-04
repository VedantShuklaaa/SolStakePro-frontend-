"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

export default function Third() {
    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-bl from-[#150f35] via-black to-[#150f35]">
            <div className="border h-[80vh] w-[90vw] flex items-center justify-center gap-15 rounded-2xl backdrop-blur-2xl bg-white/5">
                <div className="h-[70vh] w-[25vw] rounded-2xl flex flex-col gap-10">
                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                            How do I estimate and view my staking rewards?
                        </p>
                        <p className="text-md text-neutral-600 dark:text-neutral-400">
                            Staking rewards are calculated and distributed once per epoch. Each epoch lasts roughly 2 days. Rewards earned during an epoch are distributed to validators and delegators in the subsequent epoch's first block. Staking yield appears as an annual percentage, but fluctuates each epoch as inflation rates and total active stake constantly shift. Staking yield and complete inflation design are explained here:
                        </p>
                    </BackgroundGradient>

                    <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-2">
                        <p className="text-base sm:text-xl xl:text-2xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
                            net APY = network APY(1 - validator's commission)
                        </p>
                        <p className="text-base sm:text-xl xl:text-2xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
                            Annual Reward(Sol) = Staked Sol * net APY
                        </p>
                    </BackgroundGradient>
                </div>
                <div className="h-[70vh] w-[55vw] rounded-2xl flex justify-between ">
                    <div className="h-[70vh] w-[26.5vw] flex flex-col gap-6">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <span className="flex flex-col ">
                                <p className="text-base sm:text-xl xl:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    What is the Validator Fee/Commission?
                                </p>
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    Validators impose fees on inflationary rewards earned by delegated stake accounts, compensating their blockchain security and transaction processing services. This fee is called the commission rate. When rewards are distributed, commissions go to validator accounts while remaining rewards are proportionally deposited into all delegated stake accounts based on their active stake amounts. Validator commissions and staking rewards are always distributed together.
                                </p>
                            </span>
                        </BackgroundGradient>

                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-2">
                            <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                                What is Validator Uptime?
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Validator Uptime is determined by a validator's consensus voting activity. Each time a validator votes on blocks that eventually get appended to the blockchain, that validator receives one Vote Credit.
                            </p>
                        </BackgroundGradient>
                    </div>

                    <div className="h-[70vh] w-[26.5vw] flex flex-col gap-10">
                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-2">
                            <p className="text-base sm:text-xl xl:text-4xl text-black mt-4 mb-2 dark:text-neutral-200">
                                When and where are staking rewards issued?
                            </p>
                            <span className="flex flex-col gap-4">
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    Rewards are issued once per epoch and are deposited into the stake account that earned them. Stake rewards are automatically re-delegated as active stake.
                                </p>
                                <p className="text-md text-neutral-600 dark:text-neutral-400">
                                    If the rewards due to a validator or one of their stakes is less than one lamport for a given epoch, reward issuance is deferred until the next epoch in which both would receive at least one lamport.
                                </p>
                            </span>
                        </BackgroundGradient>

                        <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-2">
                            <p className="text-sm xl:text-lg text-neutral-600 dark:text-neutral-400">
                                <span className="font-bold text-white">Net APY</span> - actual annual percentage yield a user will get after deducting the validator's cut.
                            </p>
                            <p className="text-sm xl:text-lg text-neutral-600 dark:text-neutral-400">
                                <span className="font-bold text-white">Network APY</span> - annual percentage yield that a user's validator is providing.
                            </p>
                            <p className="text-sm xl:text-lg text-neutral-600 dark:text-neutral-400">
                                <span className="font-bold text-white">Validator's Commission</span>- The cut that validator is taking from the actual returns.
                            </p>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}