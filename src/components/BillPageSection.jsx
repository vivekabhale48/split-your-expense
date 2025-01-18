import { useSelector } from "react-redux"
import { ParticularBillSection } from "./ParticularBillSection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BillPageSection = () => {

    const data = useSelector((state) => state.homePageContent.data);
    const [creditors, setCreditors] = useState([])
    const [debitors, setDebitors] = useState([])
    const [settlements, setSettlements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!data?.members || data.members.length === 0) {
            navigate("/"); // Redirect to the home page
        }
    }, [data, navigate]);

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
            <h1 className=" font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 bg-clip-text text-transparent text-[48px] text-center">Welcome to trip {data.groupDetails?.groupName}</h1>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-[50%]">
                    {
                        data?.members?.map((memberDetail, index) => (
                            <ParticularBillSection key={index} memberDetail={memberDetail} />
                        ))
                    }
                </div>

                <div className="md:w-[50%]">
                    <div className="flex items-center justify-center px-4 mt-10 mb-10">
                        <button onClick={calculateTheExpense} className="bg-[#1e4b94] text-white py-3 px-3 rounded-md font-bold hover:bg-white hover:text-[#1e4b94] transition cursor-pointer">
                            Calculate The Expense
                        </button>
                    </div>

                    <div className="text-center mt-10 px-4 mb-10">
                        <h2 className="text-3xl font-bold mb-6 text-white">💸 Settlements</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            {
                             settlements.length !== 0 && (
                                <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white w-full max-w-md px-6 py-4 rounded-lg shadow-lg">
                                    <p className="text-lg font-medium">
                                        Total Share Per Person - ₹ {data?.groupDetails?.sharePerPerson}
                                    </p>
                                </div>
                             )   
                            }
                            {settlements.length === 0 ? (
                                <p className="text-gray-400 text-lg">No settlements yet!</p>
                            ) : (
                                settlements.map((settlement, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white w-full max-w-md px-6 py-4 rounded-lg shadow-lg"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold">{settlement.from}</span>
                                            <span className="text-sm font-light text-gray-100">→</span>
                                            <span className="text-lg font-semibold">{settlement.to}</span>
                                        </div>
                                        <p className="mt-2 text-lg font-medium">
                                            Amount: <span className="font-bold">₹{settlement.amount}</span>
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}