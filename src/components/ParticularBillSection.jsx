import React from "react";
import { FaUser, FaTag, FaMinus, FaPlus, FaUsers } from "react-icons/fa";
import { EachExpenseSection } from "./EachExpenseSection";
import { useDispatch } from "react-redux";
import { addNewExpense } from "../store/slice/HomeSlice";

export const ParticularBillSection = ({memberDetail}) => {

    const dispatch = useDispatch();

    function handleNewExpense(id) {
        dispatch(addNewExpense(id))
    }

    return (
        <div className="flex items-center justify-center px-4 mt-10 mb-10">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 gap-2">
                    <div className="w-2/3">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="w-1/3 text-center">
                        <label
                            htmlFor="amount"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={memberDetail.totalExpense}
                            readOnly
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Input Fields */}

                {
                    memberDetail.expenses.map((particularExpense) => (
                        <EachExpenseSection memberId={memberDetail.id} particularExpense={particularExpense} numOfExpenses={memberDetail.expenses.length}/>
                    ))
                }

                {/* More Button */}
                <button onClick={() => handleNewExpense(memberDetail.id)} className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition cursor-pointer">
                    Add More
                </button>
            </div>
        </div>
    )
}