import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Layout = (props) => (
    <>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>
)

export default Layout
