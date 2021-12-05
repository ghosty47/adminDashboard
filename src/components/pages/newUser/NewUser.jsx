import './newUser.css'

const NewUser = () => {
    return (
        <div className="newUser" >
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Braddy45"/>
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="Brad David"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Braddy45@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+234 897 657 456"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Jabi, Abuja"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>

                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' className="newUserInput"/>
                        <label for="male">Male</label>

                        <input type="radio" name='gender' id='Female' value='Female' className="newUserInput"/>
                        <label for="female">Female</label>

                        <input type="radio" name='gender' id='other' value='other' className="newUserInput"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
