import React from 'react';
import './ProfileCart.css'

const ProfileCart = (props) => {
    console.log(props.profile)
    const profile = props.profile;

    let totalSalery = 0;
    for (let i = 0; i < profile.length; i++) {
        const annual = profile[i].salery;
        totalSalery = totalSalery + annual;
    }
    // last added friend profile
    let lastFriend = "";
    for (let i = 0; i < profile.length; i++) {
        const lastAdded = profile[i];
        lastFriend = { name: lastAdded.name, img: lastAdded.img, email: lastAdded.email, phone: lastAdded.phone, salery: lastAdded.salery, company: lastAdded.company };
    }
    return (
        <div className="">
            <h2 className="pt-4 profile-review">Profile Rivew</h2>
            <div className="total-friend mt-5 m-3">
                <h4>Total Added Friend : {props.profile.length}</h4>
                <h4>Total Annual Salery : $ {totalSalery}</h4>
            </div>
            <div className="last-added-friend m-3 mt-3 p-4">
                <img src={lastFriend.img} alt="" className="img-thumbnail rounded-circle w-50 mb-4" />
                <h4> {lastFriend.name}</h4>
                <h5>Email : {lastFriend.email}</h5>
                <h5>Phone : {lastFriend.phone}</h5>
                <h5>Annual Income : $ {lastFriend.salery}</h5>
            </div>
        </div>
    );
};

export default ProfileCart;