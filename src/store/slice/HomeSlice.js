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
        addNewExpense: (state, action) => {
            const id = action.payload;
            state.data.members[id].expenses.push({
                id: state.data.members[id].expenses.length,
                description: '',
                amount: 0
            })
        },
        editDescriptionOfExpense: (state, action) => {
            console.log(action.payload);
            const {memberId ,expenseId, description} = action.payload;
            console.log(description)
            if (state.data.members?.[memberId]?.expenses?.[expenseId]) {
                state.data.members[memberId].expenses[expenseId].description = description;
            } else {
                console.error("Invalid memberId or expenseId", action.payload);
            }
        }
    }
})

export const {addTheMembers, addNewExpense, editDescriptionOfExpense} = HomeSlice.actions;
export const HomeSliceReducers = HomeSlice.reducer;