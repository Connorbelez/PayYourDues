"use client"
import React, {useState} from 'react';
import * as Slider from '@radix-ui/react-slider';
import {Button} from "@nextui-org/react";
import {animals} from "./data";
function smallestDivisor(n:number) {
    // Handle base cases
    if (n <= 1) return n; // 0 and 1 are special cases
    if (n % 2 === 0) return 2; // If the number is even, its smallest divisor is 2

    // Check for divisors up to the square root of the number
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return i; // i is the smallest divisor
        }
    }

    // If no divisors were found, the number is prime
    return n;
}

const SliderDemo = ({paymentFreq, owing} : {paymentFreq:number, owing:number}) => {

    const [values, setValues] = React.useState();
    const [mNumPayments, setMaxNumPayments] = useState()

    const handleSelectionChange = (e:any) => {
        console.log("E: ",e.target.value)
        setValues(e.target.value)
    };


    const weeksRemaining = 32



    const maxNumPayments = Math.floor(weeksRemaining/paymentFreq)
    const minNumPayments = 2



    const [numPayments, setNumPayments] = useState(2)
    const [paymentSize, setPaymentSum] = useState(owing/2)

    const handlePaymentRangeSlider  = (val:number[])=> {
        console.log("VAL: ",val)
        setNumPayments(val[0])
        adjustPaymentSize(val[0], 0)
    }


    const adjustPaymentSize = (pr:number, pf:number)=>{
        let ps = owing / pr
        setPaymentSum(ps)

    }

    // setPaymentSum(oweing/2)

    //Min payments = 2


    return (
        <form className={"flow-root"}>
                <div className={"col-span-3"}>
                    <h1>{`Number of Payments: ${numPayments}`}</h1>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none h-5"
                        defaultValue={[minNumPayments]}
                        min={2}
                        max={maxNumPayments}
                        step={1}
                        onValueChange={handlePaymentRangeSlider}
                    >
                        <Slider.Track className="bg-slate-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-white rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-black rounded-[10px] hover:bg-violet-400 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-black"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                </div>
            <h1>{`Payment Size: $ ${paymentSize}`}</h1>
            <h1>{`Repayment Schedule: $ ${paymentSize} every ${paymentFreq} weeks, for ${numPayments * paymentFreq} weeks`}</h1>
            <Button className={"float-right"}>SUBMIT</Button>

        </form>
    )
}

export default SliderDemo;