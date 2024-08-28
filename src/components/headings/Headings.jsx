import React from 'react'

const Headings = ({text,HeadingOne,HeadingTwo,HeadingThree,HeadingFour,HeadingFive,HeadingSix}) => {
  return (
    <>
        <h1 className={HeadingOne}>{text}</h1>
        <h2 className={HeadingTwo}>{text}</h2>
        <h3 className={HeadingThree}>{text}</h3>
        <h4 className={HeadingFour}>{text}</h4>
        <h5 className={HeadingFive}>{text}</h5>
        <h6 className={HeadingSix}>{text}</h6>
    </>
  )
}

export default Headings