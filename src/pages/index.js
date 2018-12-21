import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Welcome Y'all!</h1>
    <p>The cows are on the mooooove.</p>
    <p>They will be here Spring 2019.</p>
    <p>Come back and see us now ya'hear!</p>
    <div style={{ maxWidth: '750px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">About Us</Link>
  </Layout>
)

export default IndexPage
