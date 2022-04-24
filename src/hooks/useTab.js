import { useState } from 'react'

export const useTab = () => {
  const [tabIndex, setTabIndex] = useState('1')

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  return { tabIndex, handleTabChange }
}
