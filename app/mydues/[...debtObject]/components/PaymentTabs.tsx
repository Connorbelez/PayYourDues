"use client"
import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import PaymentPlanSlider from "@/app/mydues/[...debtObject]/components/PaymentPlanSlider";
export default function App() {
    const [selected, setSelected] = React.useState(1);
    const handleTabChange = (key:string|number)=>{

        // @ts-ignore
        setSelected(key)
    }
    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full ">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={handleTabChange}
                    >
                        <Tab key={1} title="Weekly">
                            <div className="flex flex-col gap-4">
                                <PaymentPlanSlider paymentFreq={1} owing={600} />
                            </div>
                        </Tab>
                        <Tab key={2} title="Bi-Weekly">
                            <div className="flex flex-col gap-4 ">
                                <PaymentPlanSlider paymentFreq={2} owing={600} />
                            </div>
                        </Tab>
                        <Tab key={4} title="Monhtly">
                            <div className="flex flex-col gap-4">
                                <PaymentPlanSlider paymentFreq={4} owing={600} />
                            </div>
                        </Tab>
                        <Tab key={8} title="Bi-Monthly">
                            <div className="flex flex-col gap-4">
                                <PaymentPlanSlider paymentFreq={8} owing={600} />
                            </div>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
