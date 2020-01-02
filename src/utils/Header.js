import styled from 'styled-components'
import React from 'react'
//import img from '../images/homeBcg.jpeg'
import img from '../images/contact_bus.jpg'

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 68px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
//const DefaultHeader = styled(IndexHeader)`
const DefaultHeader = styled.header`
  min-height: 60vh;
  /*background: url(${props => props.img}) center/cover fixed;*/
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  
`
// background values : contain, 100%, cover

HomeHeader.defaultProps = {
  img: img,
}
PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }
