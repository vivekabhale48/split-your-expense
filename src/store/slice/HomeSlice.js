import { createSlice } from "@reduxjs/toolkit";

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
                        id: 0,
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
                id: state.data.members[id].expenses.length,
                description: '',
                amount: 0
            })
        },
        editDescriptionOfExpense: (state, action) => {
            const {memberId ,expenseId, description} = action.payload;
            if (state.data.members?.[memberId]?.expenses?.[expenseId]) {
                state.data.members[memberId].expenses[expenseId].description = description;
            } else {
                console.error("Invalid memberId or expenseId", action.payload);
            }
        },
        editParticularExpenseAmount: (state, action) => {
            const {memberId ,expenseId, pexpenseAmount} = action.payload;
            if(state.data.members?.[memberId]?.expenses?.[expenseId]) {
                state.data.members[memberId].expenses[expenseId].amount = pexpenseAmount;
                let value = state.data.members[memberId].expenses.reduce((acc, expense) => {
                    acc += expense?.amount;
                    return acc;
                }, 0)
                state.data.members[memberId].totalExpense = +value;
            } else {
                console.error("Invalid memberId or expenseId", action.payload);
            }
        }
    }
})

export const {addTheMembers, addNewExpense, editDescriptionOfExpense, editParticularExpenseAmount, updateMemberName} = HomeSlice.actions;
export const HomeSliceReducers = HomeSlice.reducer;