/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
import React from 'react'
import SideFilterItem from './SideFilterItem'
function SideFilterConditions({ conditions }) {
  return (
    <div>
      {conditions.map((condition, index) => {
        return (
          <SideFilterItem
            key={index}
            filterTitle={condition.filterTitle}
            filterItem={condition.filterItem}
          />
        )
      })}
    </div>
  )
}

export default SideFilterConditions
