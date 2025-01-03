import React from "react";
import { FaUser, FaTag, FaMinus, FaPlus, FaUsers } from "react-icons/fa";

export const ParticularBillSection = () => {

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
                            value="0"
                            readOnly
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Input Fields */}
                    <div className="grid grid-cols-3 gap-3 mb-6 items-end">
                        <div>
                            <label
                                htmlFor="what"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                What?
                            </label>
                            <input
                                id="what"
                                type="text"
                                placeholder="Expense name"
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="how-much"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                How much
                            </label>
                            <input
                                id="how-much"
                                type="number"
                                placeholder="Amount"
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                {/* More Button */}
                <button className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition">
                    Add More
                </button>
            </div>
        </div>
    )
}