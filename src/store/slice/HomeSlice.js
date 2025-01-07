import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: {},
}

const HomeSlice = createSlice({
    name: 'homepageData',
    initialState,
    reducers: {
        addTheMembers: (state, action) => {
            state.data['groupDetails'] = action.payload;
            state.data['members'] = Array.from({length: action.payload.totalMembers}, (_, index) => ({
                id: index,
                name: '',
                expenses: [
                    {
                        id: uuidv4(),
                        description: '',
                        amount: 0
                    }
                ],
                totalExpense: 0
            }))
        },
        updateMemberName: (state, action) => {
            const {memberId, memberName} = action.payload;
            if(state.data.members?.[memberId]) {
                state.data.members[memberId].name = memberName;
            }  
        },
        addNewExpense: (state, action) => {
            const id = action.payload;
            state.data.members[id].expenses.push({
                id: uuidv4(),
                description: '',
                amount: 0
            })
        },
        editDescriptionOfExpense: (state, action) => {
            const {memberId ,expenseId, description} = action.payload;
            const expenseArray = state.data.members?.[memberId].expenses;
            if(expenseArray) {
                //finding the expense using expenseId
                const expense = expenseArray.find((exp) => exp.id === expenseId);
                if (expense) {
                    expense.description = description;
                } else {
                    console.error("Expense not found with the given ID:", expenseId);
                }
            }
            else {
                console.error("Invalid memberId or member not found", memberId);
            }
        },
        editParticularExpenseAmount: (state, action) => {
            const {memberId, expenseId, pexpenseAmount} = action.payload;
            const expenseArray = state.data.members?.[memberId].expenses;

            if(expenseArray) {
                const expense = expenseArray.find((exp) => exp.id === expenseId);
                if (expense) {
                    expense.amount = pexpenseAmount;
                    let value = expenseArray.reduce((acc, expense) => {
                        acc += expense?.amount;
                        return acc;
                    }, 0)
                    state.data.members[memberId].totalExpense = +value;
                } else {
                    console.error("Expense not found with the given ID:", expenseId);
                }
            }
            else {
                console.error("Invalid memberId or expenseId", action.payload);
            }
        },
        deleteExpense: (state, action) => {
            const {expenseId, memberId} = action.payload;
            state.data.members[memberId].expenses = state.data.members[memberId].expenses.filter((exp) => exp.id !== expenseId);
        }
    }
})

export const {addTheMembers, addNewExpense, editDescriptionOfExpense, editParticularExpenseAmount, updateMemberName, deleteExpense} = HomeSlice.actions;
export const HomeSliceReducers = HomeSlice.reducer;