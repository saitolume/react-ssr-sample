import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Head from '../components/Head'

const Index = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Head title="Top" />
      <Wrapper>
        <div>
          <div>count: {count}</div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <Link to="/about">About</Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 32px;
`

export default Index
