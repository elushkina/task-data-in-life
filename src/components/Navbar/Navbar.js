import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = ({products}) => {
    return (
        <nav className={styles.navbar}>
            <ul>
                {products.map((product) => {
                    let url = product.rid ? product.rid : 'rest'
                    return (
                        <li key={product.rid || 'rest'}>
                            <NavLink to={url}>{product.rname ? product.rname : 'Прочее'}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}