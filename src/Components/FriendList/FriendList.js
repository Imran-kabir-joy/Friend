import React from 'react';
import './Friendlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const FriendList = (props) => {
    // console.log(props.friend)
    const { name, company, img, email, phone, address, salery } = props.friend;
    return (
        <div className="friendList mt-3">
            <div className="row p-3">
                <div className="col-md-5">
                    <div className="friend-head-line">
                        <img src={img} alt="profile img" className="w-75 mb-4 mt-3 img-thumbnail rounded-circle" />
                        <h3 className="profile-name">{name}</h3>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="friend-detials mt-4 ml-4">
                        <h5>Email : {email}</h5>
                        <h5>Phone : {phone}</h5>
                        <h5>Annual Income : $ {salery}</h5>
                        <h5>Address : {address.suite}, {address.street}, {address.city}</h5> <br />
                        <h5>Job-Place : {company.catchPhrase} </h5> <br />
                        <button className="add-button" onClick={() => props.addFriendHandler(props.friend)}> <FontAwesomeIcon icon={faUser} /> Accept Friend </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;