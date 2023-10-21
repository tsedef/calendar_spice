//userProfileSlice.ts
import React from "react";
import { setUserProfile } from "../store/userProfile-slice"
import { UserProfile } from '../models/redux-models';
import { useAppDispatch, useAppSelector } from "../hooks.ts/redux-hooks";


const UserProfilePanel: React.FC = () => {
    const userProfile: UserProfile = useAppSelector((state) => state.userProfile);
    const dispatch = useAppDispatch();

    const loadProfile = () => {
        //simulate loading a user profile from an API
        const profileData = {
            name: 'John Doe',
            email: 'john@example.com',
            interests: ["basketball", "music", "programming"]
        };
        
        //dispatch the user profile to the Redux store
        dispatch(setUserProfile(profileData));

    };

    return(
        <div>
        <h1>UserProfile</h1>
        <div>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Interests: {userProfile.interests.join(',')}</p>

        <button onClick={loadProfile}>Load Profile</button>
        </div>
        </div>
    );
};      

export default UserProfilePanel;