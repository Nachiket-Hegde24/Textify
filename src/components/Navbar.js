// rfc -> react function based component 
import React from 'react'
// import PropTypes from 'prop-types'

// while using raect-router, change all <a href=> to <a to=> 
// props used to reuse same function anywhere but making small changes
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar bg-${props.mode} navbar-${props.mode} border-bottom sticky-top`}>
                <div className="container-fluid justify-around">
                    <a className="navbar-brand" href="/">
                        <img src="apple-touch-icon.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                        {props.title}
                    </a>
                    <input type="checkbox" onClick={props.toggleMode} className="btn-check" id="btn-check-4" autoComplete="off" />
                    <label className={`btn text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="btn-check-4">{props.mode === 'light' ? '>Enable Dark Mode' : '>Enable Light Mode'}</label>
                </div>
            </nav>
        </>
    )
}

// // .isRequired checks is it defined or not
// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
//     // name: PropTypes.string.isRequired
// }
// // if props values are not defined, then default values are used
// Navbar.defaultProps = {
//     search: "search button here"
// }
