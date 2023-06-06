import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumb = ({ title, product }) => {
    return (
        <section className='bread_crumb'>
            <h3>
                <Link to='/'>Home</Link>
                {product && <Link to='/'>/ products</Link>}
                / {title}
            </h3>
        </section>
    )
}

export default Breadcrumb