import React from 'react'
import NavLayout from '../components/NavLayout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/showcase_tlu.jpg'

export default function showcase() {
  return (
    <NavLayout>
      <SEO title="Showcase" />
      <PageHeader img={img}>
        <Banner title="showcase" subtitle="my certification & projects" />
      </PageHeader>
    </NavLayout>
  )
}