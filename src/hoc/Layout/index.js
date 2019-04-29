import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.css'

const Layout = (props) => (
    <>
        <Header />
        <main className="Layout">
            {props.children}
        </main>
        <Footer />
    </>
)

export default Layout
