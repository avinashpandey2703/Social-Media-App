import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHouseChimney, faUser, faRightFromBracket, faMagnifyingGlass,faNewspaper, faBars } from "@fortawesome/free-solid-svg-icons"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
    const user = useSelector(state => state.user)
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const ProfileUrl = `/Profile/${user.user._id}`

    const logoutHandler = async (e) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        Dispatch({ type: "LOGIN_ERROR" })
        Navigate("/login")
        toast.info("User logout Sucessfully")
    }
    const otherProfile = (id) => {
        Navigate(`/Profile/${id}`)
    }
    return (
        <div className='col-md-3 sticky-top bg-primary-subtle'>
            <ToastContainer />
            <div className='sticky-top'>
                <FontAwesomeIcon className='my-3 mb-5 fs-1 twitterlogosidebar' icon={faSquareXTwitter} />
                <nav className='sidebarnav flex-column navbar-expand-lg'>
                    <button class="navbar-toggler togglebtn btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className='mx-2' icon={faBars} />
                    </button>
                    <ul className="nav collapse navbar-collapse flex-column float-end my-3" id="navbarSupportedContent">
                        <NavLink to="/" className="nav-item mb-2" ><button className=" fw-bold  btn" ><FontAwesomeIcon className="mx-2" icon={faHouseChimney} size="lg" />Home</button></NavLink>
                        <NavLink to={ProfileUrl} className="nav-item mb-2"><button className="btn fw-bold  " ><FontAwesomeIcon className='mx-2' icon={faUser} /> Profile</button></NavLink>
                        <NavLink to={ProfileUrl} className="nav-item mb-2"><button className="btn fw-bold  " ><FontAwesomeIcon className='mx-2' icon={faUser} /> Profile</button></NavLink>
                        <NavLink to="/trending" className="nav-item mb-2"><button className="btn fw-bold  " ><FontAwesomeIcon className='mx-2' icon={faNewspaper} /> Trending</button></NavLink>

                        <navLink className="nav-item"><button className=" btn fw-bold" onClick={(e) => logoutHandler()}  > <FontAwesomeIcon className='mx-2' icon={faRightFromBracket} /> Logout</button></navLink>

                    </ul>
                </nav>
                <div className='d-flex sidebarleftProfile'>
                    <img className="profile-pic" onClick={() => otherProfile(user.user._id)} src={user.user.ProfilePic} alt="Profile Picture" />
                    <p className=' card-text fw-bold ms-3'>{user.user.Name}<h6 className='mt-1'>{user.user.UserName}</h6></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar