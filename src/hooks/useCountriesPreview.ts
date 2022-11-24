import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectors, actions } from "store"

import services from "services"

export const useCountries = () => {
  const countriesState = useSelector(selectors.countriesPreview.getCountriesPreview)
  const dispatch = useDispatch()

  useEffect(() => {
    services.restCountries.fetchAllCountries().then((countries) => {
      dispatch(actions.countriesPreview.setCountriesList(countries))
      dispatch(actions.countriesPreview.setLoading(false))
    })
  }, [])

  return useMemo(() => (
    countriesState
  ), [countriesState.isLoading, countriesState.countries])
}