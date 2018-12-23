import React from "react";
import { Link } from "gatsby";
import FNF from "../components/fnf-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>
      Looks like you strayed away from the herd. Here's a friend to help you
      find your way back.
    </p>
    <div style={{ maxWidth: "750px", marginBottom: "1.45rem" }}>
      <FNF />
    </div>
    <Link to="/">Return to the herd</Link>
  </Layout>
);

export default NotFoundPage;
