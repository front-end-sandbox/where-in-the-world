import React from "react"

import { useCountries } from "hooks"

export const App = () => {
  const { isLoading, countries } = useCountries()

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      {countries.map(country => country.name)}
    </div>
  )
}