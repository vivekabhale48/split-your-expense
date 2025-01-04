import { useSelector } from "react-redux"
import { ParticularBillSection } from "./ParticularBillSection";
import { useEffect } from "react";

export const BillPageSection = () => {

    const data = useSelector((state) => state.homePageContent.data);

    return (
        <div className="text-white">
            <h1 className="text-white text-[48px] text-center">Welcome to trip {data.groupDetails.groupName}</h1>

            <div>
                {
                    data.members.map((memberDetail) => (
                        <ParticularBillSection memberDetail={memberDetail} />
                    ))
                }
            </div>
        </div>
    )
}