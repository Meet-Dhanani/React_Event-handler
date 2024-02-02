import React from 'react'

const Forgotpassword = () => {
    const resetp = () => {
        let e = document.getElementById('remail').value

        if (!e) {
            alert('You must write your register email')
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <form>
                    <h1>Reset Password</h1>
                    <h6>Please enter your email address. You will receive<br /> a link to create a new password via email.</h6>
                    <div>
                        <label>Email</label><br />
                        <input type="email" placeholder="Enter your email" id="remail" />
                    </div>
                    <center>
                        <button type="button" onClick={resetp}>Reset Password</button>
                    </center>
                    <div>
                        <p>Return to the <a href='/login'>Sign In</a></p>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Forgotpassword