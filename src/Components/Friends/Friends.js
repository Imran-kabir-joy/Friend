import React from 'react';
import FakeData from '../../FakeData'
import { useState } from 'react';
import FriendList from '../FriendList/FriendList';
import './Friends.css'
import ProfileCart from '../ProfileCart/ProfileCart';
const Friends = () => {
    const friendData = FakeData.slice(0, 10);
    const [friends, setFriends] = useState(friendData)

    // profile add handler
    const [profile, setProfile] = useState([]);
    const addFriendHandler = (friend) => {
        const newProfile = [...profile, friend];
        setProfile(newProfile);
    }
    return (
        <div>
            <div className="friend-profile">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="profile-cart ml-3 mr-3 pb-3 text-center">
                            <ProfileCart profile={profile}></ProfileCart>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="profile">
                            {
                                friends.map(friend => <FriendList friend={friend} id={friend.id} addFriendHandler={addFriendHandler}> </FriendList>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;