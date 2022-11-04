import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectors, actions } from "store"

import services from "services"

export const useCountries = () => {
  const countriesState = useSelector(selectors.countries.getCountries)
  const dispatch = useDispatch()

  useEffect(() => {
    services.restCountries.fetchAllCountries().then((countries) => {
      dispatch(actions.countries.setCountries(countries))
      dispatch(actions.countries.setLoading(false))
    })
  }, [])

  return countriesState
}