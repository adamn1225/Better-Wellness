import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I'm a Web Dev learning Gatsby for a future project</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default About;