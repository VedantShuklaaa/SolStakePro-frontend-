'use client';
import { Input } from "@/components/ui/input";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function calculator() {

    const Params = [
        {
            subheading1: 'Solana to be staked',
            subheading2: '%SOL',
            placeHolder: 'Enter the total number of solana to be staked',
            Type: 'stakedSol',
            bottom: 'minimum stake: 1 SOL',
            onchange: (e: any) => { setStakedSol(e.target.value) },
        }, {
            subheading1: 'Annual Percentage Yield',
            subheading2: '(APY)',
            placeHolder: 'Enter the network annual percentage yield(APY)',
            Type: 'APY',
            bottom: 'Current Solana network average: ~7.5%',
            onchange: (e: any) => { setAPY(e.target.value) },
        }, {
            subheading1: 'Validator Commission',
            subheading2: '(%)',
            placeHolder: "Enter the Validator's commission",
            Type: 'validatorsCommission',
            bottom: 'Typical range: 0% - 10%',
            onchange: (e: any) => { setValidatorsCommission(e.target.value) },
        }
    ]

    const Notes = [
        {
            title: "• Rewards are distributed approximately every 2-3 days"
        }, {
            title: "• APY can vary based on network conditions"
        }, {
            title: "• There's a warm-up period when you first stake"
        }, {
            title: "• Unstaking takes 2-3 days to complete"
        }
    ]

    const [stakedSOl, setStakedSol] = useState("");
    const [APY, setAPY] = useState("");
    const [validatorsCommission, setValidatorsCommission] = useState("");


    const onClickCalculate = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/calculator/stakedSol', {
                totalSolStaked: stakedSOl,
                annualPercentageYield: APY,
                validatorsCommision: validatorsCommission
            },)
            const data = res.data.data;

            setDailyReturn(data.daily_return);
            setMonthlyReturn(data.monthly_return);
            setYearlyReturn(data.annual_return);
            setNetAPY(data.net_APY);

        } catch (err: any) {
            alert(err.res.data.message || 'nice try diddy!')
        }
    }

    const [dailyReturn, setDailyReturn] = useState('0.00');
    const [monthlyReturn, setMonthlyReturn] = useState('0.00');
    const [yearlyReturn, setYearlyReturn] = useState('0.00');
    const [netAPY, setNetAPY] = useState('0.00');

    const outputParams = [
        {
            title: "Daily Rewards",
            value: dailyReturn
        }, {
            title: "Monthly Rewards",
            value: monthlyReturn
        }, {
            title: "Yearly Rewards",
            value: yearlyReturn
        }
    ]

    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center gap-10 bg-gradient-to-tr from-[#150f35] via-black to-[#150f35]">
            <div className=" flex flex-col text-center mt-10">
                <p className="text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-600">
                    Staking Rewards Calculator
                </p>
                <p className="text-xl">Calculate your potential Solana staking rewards based on current market conditions</p>
            </div>
            <div className="h-[70vh] w-[85vw] rounded-2xl flex justify-center items-center gap-10">
                <div className="h-[70vh] w-[40vw] border rounded-2xl backdrop-blur-2xl bg-white/5 flex flex-col items-center justify-start gap-4">
                    {Params.map((Items, idx) => (
                        <div className="h-[15vh] w-[38vw] mt-5 border rounded-2xl backdrop-blur-2xl bg-white/1 flex flex-col items-center justify-center" key={idx}>
                            <div className="w-2xl flex justify-between items-center p-2 text-xl">
                                <span>{Items.subheading1}</span>
                                <span>{Items.subheading2}</span>
                            </div>
                            <Input placeholder={Items.placeHolder} type={Items.Type} className="w-2xl" onChange={Items.onchange} />
                            <div className="w-2xl flex p-2">
                                <span>{Items.bottom}</span>
                            </div>
                        </div>
                    ))}
                    <div className="h-[10vh] w-[38vw] rounded-2xl flex flex-col items-center justify-center">
                        <HoverBorderGradient className="text-xl w-[10vw]">
                            <button onClick={onClickCalculate} className="cursor-pointer">Calculate</button>
                        </HoverBorderGradient>
                    </div>
                </div>
                <div className="h-[70vh] w-[40vw] border rounded-2xl backdrop-blur-2xl bg-white/5 flex flex-col justify-start items-center p-4">
                    <div className="h-[6vh] w-[20vw] rounded-2xl flex items-center justify-center gap-2">
                        <span><Image src={"/trending-up.png"} height={50} width={50} alt='no image' /></span>
                        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-600">Projected Rewards</span>
                    </div>
                    <div className="h-[12vh] w-[38vw] mt-5 border rounded-2xl backdrop-blur-2xl bg-white/1 flex flex-col items-start justify-center p-4 gap-1">
                        <span className="text-lg text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-600">Net APY (After Commission)</span>
                        <span className="text-6xl">{netAPY}</span>
                    </div>
                    {outputParams.map((Items, idx) => (
                        <div className="h-[8vh] w-[38vw] mt-5 border rounded-2xl backdrop-blur-2xl bg-white/1 flex flex-col items-start justify-center p-4" key={idx}>
                            <span className="text-md text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-600 font-light">{Items.title}</span>
                            <span className="text-4xl font-bold">{Items.value} SOL</span>
                        </div>
                    ))}
                    <div className="h-[15vh] w-[38vw] mt-5 border border-blue-400 rounded-2xl backdrop-blur-2xl bg-blue-500/10 flex flex-col items-start justify-center p-4 gap-2">
                        <span className="font-bold">
                            Important Notes:
                        </span>
                        <span>
                            {Notes.map((Items, idx) => (
                                <span>
                                    <p key={idx} className="font-light">{Items.title}</p>
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

