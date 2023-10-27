import { FC } from 'react'
import SliderDemo from "@/app/mydues/[...debtObject]/components/Slider";
import {title as T1} from "@/components/primitives";
import {Divider} from "@nextui-org/react";
import PaymentTabs from "./components/PaymentTabs"
interface pageProps {

}

const App: FC<pageProps> = ({}) => {


    return (
        <div className={""}>
            <h1 className={T1({ color: "violet",size: "sm" })}>Create a Payment Plan&nbsp;</h1>

            <div className={"my-10"}>
                <PaymentTabs/>

            </div>
        </div>
    )
}

export default App