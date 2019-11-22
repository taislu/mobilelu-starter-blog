import React from 'react'
import NavLayout from '../components/NavLayout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/contact_bus2.jpg'

export default function contact() {
  return (
    <NavLayout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner title="contact us" subtitle="Send us a message" />
      </PageHeader>
    </NavLayout>
  )
}

