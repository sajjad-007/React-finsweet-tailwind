import React from 'react'
import AboutProblem from './aboutSections/AboutProblem'
import AboutFocus from './aboutSections/AboutFocus'
import AboutProcess from './aboutSections/AboutProcess'
import AboutInspire from './aboutSections/AboutInspire'
import AboutBenefit from './aboutSections/AboutBenefit'
import AboutMeet from './aboutSections/AboutMeet'

const AboutUs = () => {
  return (
    <div>
      {/* // Problem section start here */}
        <AboutProblem/>
      {/* // Problem section end here */}

      {/* // focus section start here */}
        <AboutFocus/>
      {/* // focus section end here */}

      {/* // process section start here */}
        <AboutProcess/>
      {/* // process section end here */}

      {/* // Inspire section start here */}
        <AboutInspire/>
      {/* // Inspire section end here */}

      {/* // Problem section start here */}
        <AboutBenefit/>
      {/* // Problem section end here */}

      {/* // Meet section start here */}
        <AboutMeet/>
      {/* // Meet section end here */}
      
      {/* // Problem section start here */}
      {/* // Problem section end here */}
    </div>
  )
}

export default AboutUs