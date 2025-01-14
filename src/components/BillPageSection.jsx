import { useSelector } from "react-redux"
import { ParticularBillSection } from "./ParticularBillSection";
import { useEffect, useState } from "react";

export const BillPageSection = () => {

    const data = useSelector((state) => state.homePageContent.data);
    const [creditors, setCreditors] = useState([])
    const [debitors, setDebitors] = useState([])

    const calculateTheExpense = () => {
        data?.members.forEach((member) => {
            if(member?.netBalance > 0) {
                setCreditors((prev) => [...prev, member])
            }
            else {
                setDebitors((prev) => [...prev, member])
            }
        })
        
    }

    return (
        <div className="text-white">
            <h1 className="text-white text-[48px] text-center">Welcome to trip {data.groupDetails?.groupName}</h1>

            <div>
                {
                    data?.members?.map((memberDetail, index) => (
                        <ParticularBillSection key={index} memberDetail={memberDetail} />
                    ))
                }
            </div>

            <div className="flex items-center justify-center px-4 mt-10 mb-10">
                <button onClick={calculateTheExpense} className="bg-[#1e4b94] text-white py-3 px-3 rounded-md font-bold hover:bg-white hover:text-[#1e4b94] transition cursor-pointer">
                    Calculate The Expense
                </button>
            </div>
        </div>
    )
}