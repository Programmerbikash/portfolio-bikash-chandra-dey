import React from 'react';
import { FaGithubSquare, FaGooglePlusSquare, FaLinkedin } from 'react-icons/fa';
import { GrFacebook, GrMailOption } from "react-icons/gr";

const Profile = () => {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <a href='https://github.com/Programmerbikash?tab=repositories'>
                                <GrFacebook />
                            </a>
                            <a href='#'>
                                <FaGooglePlusSquare />
                            </a>
                            <a href='#'>
                                <FaLinkedin />
                            </a>
                            <a href='#'>
                                <FaGithubSquare />
                            </a>
                            <a href='#'>
                                <GrMailOption />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;