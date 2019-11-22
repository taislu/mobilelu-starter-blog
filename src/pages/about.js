import React from 'react'
import NavLayout from '../components/NavLayout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/aboutTLU.jpeg'

export default function about() {
  return (
    <NavLayout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner title="about us" subtitle="a little about us" />
      </PageHeader>
    </NavLayout>
  )
}


/*
const about = () => {
    return (
        <h1>About Page !!!!!!</h1>
    )
}

export default about
*/