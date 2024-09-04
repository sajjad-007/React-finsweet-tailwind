import React from 'react'
import FeatureNeed from './featureSections/FeatureNeed'
import FeatureLogo from './featureSections/FeatureLogo'
import FeatureBenefit from './featureSections/FeatureBenefit'
import FeatureClint from './featureSections/FeatureClint'
import FeatureRevision from './featureSections/FeatureRevision'
import FeatureSupport from './featureSections/FeatureSupport'
import FeatureDelivery from './featureSections/FeatureDelivery'
import FeatureFaq from './featureSections/FeatureFaq'

const Features = () => {
  return (
    <div>
      {/* //Need section start*/}
        <FeatureNeed/>
      {/* //Need section end*/}

      {/* //Need section start*/}
        <FeatureLogo/>
      {/* //Need section end*/}

      {/* //benefit section start*/}
        <FeatureBenefit/>
      {/* //benefit section end*/}

      {/* //Clint section start*/}
        <FeatureClint/>
      {/* //Clint section end*/}

      {/* //Revision section start*/}
        <FeatureRevision/>
      {/* //Revision section end*/}

      {/* //Support section start*/}
        <FeatureSupport/>
      {/* //Support section end*/}

      {/* //Delivery section start*/}
        <FeatureDelivery/>
      {/* //Delivery section end*/}

      {/* //FAQ section start*/}
        <FeatureFaq/>
      {/* //FAQ section end*/}
    </div>
  )
}

export default Features