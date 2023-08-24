/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'


const Nav = ({links}) => {
    return (
        <nav className="navigation">

           {links.map((item) => {
                return (
                <Link key={item.text} to={item.link}>
                    <div>{item.text}</div>
                </Link>
                )
           })}
        </nav>
    )
}


export default Nav;