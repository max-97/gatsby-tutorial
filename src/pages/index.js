import React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
    console.log(data);
    const { title, description } = data.site.siteMetadata
    return (
        <Layout>
            <section className={ header }>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>UX Designer & web developer</p>
                    <Link className={ btn } to="/project">My Portfolio Project</Link>
                </div>
                <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }}/>
                <p>{ title } - { description }</p>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query SiteInfo {
        site {
            siteMetadata {
                description
                title
            }
        }
    }
`