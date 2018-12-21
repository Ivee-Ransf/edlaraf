import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>We are Edlar Angus Farm!</h1>
    <h2>Located on the sunshine filled panhandle of Florida</h2>
    <p>Contact Us at:</p>
    <p>Edmond L. Ransford III</p>
    <p>1599 McKinnon Bridge Rd.</p>
    <p>Ponce de Leon, FL</p>
    <p>Tel: 850-951-0499</p>
    <p>Email: edlaraf@centurylink.net</p>
    <Link to="/">Go back to the homepage</Link>
    
  </Layout>
)

export default SecondPage
