import "./header.scss"
import { useState } from "react"



export default function Header() {

    const [open, setOpen] = useState(false)

    const menuHandle = () => {
        setOpen(!open)
    }
    return (
        <div className="header">

            <div className="header__menu-box">
                <i onClick={menuHandle} className={open ? " icon_close" : "icon_menu"}></i>
            </div>
            <div className="header__search-box">
                <input type="text" className="header__search" placeholder="Search " />
                <svg className="header__search-icon">
                    <use xlinkHref="sprite.svg#icon-magnifying-glass" />
                </svg>
            </div>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="sprite.svg#icon-bookmark" />
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="sprite.svg#icon-chat" />
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src="img/user.png" alt="User photo" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Jonas &nbsp; <i className="arrow_triangle-down"></i> </span>
                </div>
            </nav>
        </div >
    )
}
