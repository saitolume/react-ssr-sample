import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Head from '../components/Head'

const About = () => (
  <>
    <Head title="About" />
    <Wrapper>
      <div>This is About page.</div>
      <Link to="/">Top</Link>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  margin: 32px;
`

export default About
