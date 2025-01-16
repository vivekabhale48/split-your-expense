import { useSelector } from "react-redux"
import { ParticularBillSection } from "./ParticularBillSection";
import { useEffect, useState } from "react";

export const BillPageSection = () => {

    const data = useSelector((state) => state.homePageContent.data);
    const [creditors, setCreditors] = useState([])
    const [debitors, setDebitors] = useState([])
    const [settlements, setSettlements] = useState([]);

    const calculateTheExpense = () => {
        const tempCreditors = [];
        const tempDebitors = [];
        data?.members.forEach((member) => {
            if (member?.netBalance > 0) {
                tempCreditors.push({ ...member })
            }
            else if (member?.netBalance < 0) {
                tempDebitors.push({ ...member });
            }
        })

        tempCreditors.sort((a, b) => b.netBalance - a.netBalance);
        tempDebitors.sort((a, b) => a.netBalance - b.netBalance);
        setCreditors(tempCreditors);
        setDebitors(tempDebitors);

        const tempSettlements = [];
        let i = 0, j = 0;

        while (i < tempCreditors.length && j < tempDebitors.length) {
            const creditor = tempCreditors[i];
            const debitor = tempDebitors[j];

            const settlementAmount = Math.min(
                creditor.netBalance,
                Math.abs(debitor.netBalance)
            );

            tempSettlements.push({
                from: debitor.name,
                to: creditor.name,
                amount: settlementAmount.toFixed(2),
            });

            // Update balances
            creditor.netBalance -= settlementAmount;
            debitor.netBalance += settlementAmount;

            // Move to the next creditor or debitor if balance is settled
            if (creditor.netBalance === 0) i++;
            if (debitor.netBalance === 0) j++;
        }
        setSettlements(tempSettlements);
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