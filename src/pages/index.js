import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Galery from "../components/galery"
import Services from "../components/services/services"
import Form from "../components/form/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Galery/>
    <Services/>
    <Form/>
  </Layout>
)

export default IndexPage
