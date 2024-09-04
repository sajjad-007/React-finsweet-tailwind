import React from 'react'
import PricingChart from './PricingChart'
import PricingFaq from './PricingFaq'

const Pricing = () => {
  return (
    <div>
      {/* // Cart section start here */}
        <PricingChart/>
      {/* // Cart section end here */}

      {/* // Problem section start here */}
        <PricingFaq/>
      {/* // Problem section end here */}
    </div>
  )
}

export default Pricing