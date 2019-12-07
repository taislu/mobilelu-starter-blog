import React from 'react'
import NavLayout from '../components/NavLayout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/about_us1.jpg'

//import OurMission from "../info/our_mission"
import OurStory from "../info/our_story"

export default function about() {
  return (
    <NavLayout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner title="about me" subtitle="a little about me" />
      </PageHeader>
      {/* <OurMission /> */}
      <OurStory />
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