import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
    return (
        <div className="user" >
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>

                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://images.pexels.com/photos/10341144/pexels-photo-10341144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" 
                            className="userShowImg" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Brad david</span>
                            <span className="userShowUserTitle">Frontend Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Braddy45</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">23.06.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+234 813 345 609</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Braddy45@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Jabi, Abuja</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    placeholder='braddy45' 
                                    className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input 
                                    type="text" 
                                    placeholder='Brad David' 
                                    className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    placeholder='Braddy45@gmail.com' 
                                    className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                    type="text" 
                                    placeholder='+234 813 345 609' 
                                    className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                    type="text" 
                                    placeholder='Jabi, Abuja' 
                                    className="userUpdateInput" 
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                    src="https://images.pexels.com/photos/10341144/pexels-photo-10341144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                    alt="" 
                                    className="userUpdateImg" 
                                />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{display: 'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
 