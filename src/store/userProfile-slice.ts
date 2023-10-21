//userProfile.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserProfilePanel from '../components/UserProfile';
import { UserProfile } from '../models/redux-models';


//Defining user profile iniial state
const initialState: UserProfile = {
    name:"",
    email:"",
    interests:[],
};

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: initialState,
    reducers: {
        //these are the action types themselves (e.g.)userProfile/setUserProfile
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            return action.payload;
        },
    },
});

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: initialState,
    
})


//SETS ACTION NAMES
export const { setUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;

/*
Each slice would have data and their reducers. One 
thing that we should remember is that reducers should 
be free from side-effects (http calls, timeouts) and 
they should be simple functions just to modify the state. 
All the asynchronous code should be taken care of in the 
actions.
codign
We have to understand that redux-toolkit 
automatically creates actions with type and 
payload based on the reducers that are created 
by us in the slice. So those actions can be accessed 
from sliceName.actions (here todoSlice.actions) and 
we can call them using dispatch() function which 
dispatches the action and call the appropriate reducers 
based on the action type. 
*/