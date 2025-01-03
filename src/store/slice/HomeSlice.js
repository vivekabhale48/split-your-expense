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
                id: index + 1,
                name: '',
                expenses: [
                    {
                        id: 1,
                        description: '',
                        amount: 0
                    }
                ]
            }))
        }
    }
})

export const {addTheMembers} = HomeSlice.actions;
export const HomeSliceReducers = HomeSlice.reducer;