"use client"
import { Card, Metric, Text, Flex, ProgressBar, Grid } from "@tremor/react";
import { FC } from 'react'
import {Button} from "@nextui-org/button";
import {Card as NCard, CardHeader, CardBody, CardFooter, Divider, Link,Chip} from "@nextui-org/react";
import {title as T1} from "@/components/primitives";

interface DuesRemainingProps {
    title:string,
    metric:number,
    value:number,
    target:number,
    type:string,
    onPaymentPlan: boolean,
    link:string

}

const App: FC<DuesRemainingProps> = ({
    title,
    metric,
    value,
    target,
    type,
    onPaymentPlan,
    link
                            }) => {



    const percent : number = parseInt(String((value / target) * 100));
    const remaining : number = (target - value)
    const chipColor : string = type === "dues" ? "primary" : "danger";
    const chipText : string = type === "dues" ? "Dues" : "Fine";

    const paymentPlan : boolean = onPaymentPlan;

    //ToDo: switch for chip colors/text/icons
    //ToDo: switch for payment plan, and button conditional rendering

    return (
        <div className={""}>

            <NCard  >
                <CardHeader className={"flow-root"}>
                    <h1 className={T1({ color: "violet",size: "sm" })}>{title}&nbsp;</h1>
                    <div className={"float-right grid grid-flow-col gap-2"}>
                        {paymentPlan ? <Chip size={"sm"} color={"success"}>Payment Plan</Chip> : null}
                        <Chip size={"sm"} color={chipColor}>{chipText}</Chip>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>

                        <Flex justifyContent={"between"}>
                            <div>
                                <Text>{"Remaining"}</Text>
                                <Metric>{`$ ${remaining}`}</Metric>
                            </div>
                            <Button variant={"faded"} color={"success"} className={"w-1/4"}>PAY OFF</Button>
                        </Flex>
                        <Flex className="mt-4">
                            <Text className="truncate">{`${percent}% ($ ${value})`}</Text>
                            <Text>{`$ ${target}`}</Text>
                        </Flex>
                        <ProgressBar value={percent} className="mt-2" />
                </CardBody>
                <Divider/>
                <CardFooter className={"grid grid-flow-col gap-5"}>
                    <Link href={"/mydues/debtSlug?id=123"}>
                        <Button className={"w-full"}>Payment Plan</Button>
                    </Link>
                    <Button>One Time Payment</Button>
                </CardFooter>
            </NCard>
        </div>
    )
}

export default App
