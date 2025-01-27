import { useDispatch } from "react-redux"
import { editDescriptionOfExpense, editParticularExpenseAmount, deleteExpense, allMembersTotalExpense, netBalanceParticularMember } from "../store/slice/HomeSlice";
import { useEffect, useState } from "react";

export const EachExpenseSection = ({particularExpense, numOfExpenses, memberId}) => {

    const dispatch = useDispatch();
    const [expenseDescription, setExpenseDescription] = useState('');
    const [particularExpenseAmount, setParticularExpenseAmount] = useState(0);
    const [dataDeleted, setDataDeleted] = useState(false);

    useEffect(() => {}, [dataDeleted])

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
        dispatch(allMembersTotalExpense());
        dispatch(netBalanceParticularMember());
    }

    const handleDeleteExpense = (event) => {
        let data = {
            memberId,
            expenseId: particularExpense.id,
        }
        dispatch(deleteExpense(data));
        setDataDeleted((prev) => !prev)
        // setExpenseDescription(particularExpense.description);
    }

    return (
        <div className="grid grid-cols-3 gap-3 mb-6 items-end">
            <div>
                <label
                    htmlFor="what"
                    className="block font-semibold mb-2"
                >
                    What?
                </label>
                <input
                    id="what"
                    type="text"
                    value={particularExpense.description}
                    onChange={handleDescriptionChange}
                    placeholder="Expense name"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label
                    htmlFor="how-much"
                    className="block font-semibold mb-2"
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
                    className={numOfExpenses > 1 ? 'bg-[#241FA4] text-white px-4 py-2 rounded-md hover:bg-[#48bcda] transition disabled:opacity-65' : 'bg-[#241FA4] text-white px-4 py-2 rounded-md transition disabled:opacity-65'}
                    disabled={numOfExpenses > 1 ? false : true}
                    onClick={handleDeleteExpense}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}