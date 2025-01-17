import React, { useState } from "react";
import { FaUser, FaTag, FaMinus, FaPlus, FaUsers } from "react-icons/fa";
import { EachExpenseSection } from "./EachExpenseSection";
import { useDispatch } from "react-redux";
import { addNewExpense, updateMemberName } from "../store/slice/HomeSlice";

export const ParticularBillSection = ({memberDetail}) => {

    const dispatch = useDispatch();
    const [memberName, setMemberName] = useState('');

    function handleNewExpense(id) {
        dispatch(addNewExpense(id))
    }

    const handleMemberName = (event) => {
        setMemberName(event.target.value);
        let data = {
            memberId: memberDetail.id,
            memberName: event.target.value
        }
        dispatch(updateMemberName(data));
    }

    return (
        <div className="flex items-center justify-center px-4 mt-10 mb-10">
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white w-full max-w-md px-6 py-4 rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 gap-2">
                    <div className="w-2/3">
                        <label
                            htmlFor="name"
                            className="block font-semibold mb-2"
                        >
                            Member {memberDetail.id+1}
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            value={memberName}
                            onChange={handleMemberName}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="w-1/3 text-center">
                        <label
                            htmlFor="amount"
                            className="block font-semibold mb-2"
                        >
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={memberDetail.totalExpense}
                            readOnly
                            className="w-full cursor-not-allowed font-bold bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Input Fields */}

                {
                    memberDetail.expenses.map((particularExpense, index) => (
                        <EachExpenseSection key={index} memberId={memberDetail.id} particularExpense={particularExpense} numOfExpenses={memberDetail.expenses.length}/>
                    ))
                }

                {/* More Button */}
                <button onClick={() => handleNewExpense(memberDetail.id)} className="w-full bg-[#241FA4] hover:bg-[#48bcda] text-white py-3 rounded-md font-bold hover:bg-blue-600 transition cursor-pointer">
                    Add More
                </button>
            </div>
        </div>
    )
}