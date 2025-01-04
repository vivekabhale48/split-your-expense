import { useDispatch } from "react-redux"
import { editDescriptionOfExpense, editParticularExpenseAmount } from "../store/slice/HomeSlice";
import { useState } from "react";

export const EachExpenseSection = ({particularExpense, numOfExpenses, memberId}) => {

    const dispatch = useDispatch();
    const [expenseDescription, setExpenseDescription] = useState('');
    const [particularExpenseAmount, setParticularExpenseAmount] = useState(0);

    function handleDescriptionChange(event) {
        setExpenseDescription(event.target.value);
        let data = {
            memberId,
            expenseId: particularExpense.id,
            description: event.target.value
        }
        dispatch(editDescriptionOfExpense(data));
    }

    const handleExpenseAmountChange = (event) => {
        setParticularExpenseAmount(event.target.value);
        let data = {
            memberId,
            expenseId: particularExpense.id,
            pexpenseAmount: +event.target.value || 0
        }
        dispatch(editParticularExpenseAmount(data))
    }


    return (
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
                    value={expenseDescription}
                    onChange={handleDescriptionChange}
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
                    value={particularExpenseAmount}
                    onChange={handleExpenseAmountChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition disabled:opacity-65"
                    disabled={numOfExpenses > 1 ? false : true}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}