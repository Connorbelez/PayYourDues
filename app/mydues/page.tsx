import { FC } from 'react'
import DuesRemaining from "@/components/DuesRemaining";
import {title} from "@/components/primitives";
interface pageProps {

}

// export default App

export default function App({params, searchParams}: {params:pageProps, searchParams:any}) {
    console.log("SEARCH PARAMS: ", searchParams);
    //Search params: debtTopic, debtId, userName
    return (
        <div>
            <div className={"grid grid-cols-1 grid-flow-row gap-5"}>
                <DuesRemaining title={"Total Owing"} metric={612} value={150} target={612} type={"dues"} onPaymentPlan={true}/>

                <DuesRemaining title={"Chapter Dues"} metric={600} value={150} target={600} type={"dues"} onPaymentPlan={true}/>
                <DuesRemaining title={"Dress Code Fine"} metric={0} value={0} target={12} type={"fine"} onPaymentPlan={false}/>

            </div>
        </div>

)
}
