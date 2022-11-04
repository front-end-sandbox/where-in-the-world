import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  restCountryService,
  getCountries,
  setCountries,
  setLoading,
} from "store"

export const useCountries = () => {
  const countriesState = useSelector(getCountries)
  const dispatch = useDispatch()

  useEffect(() => {
    restCountryService.fetchAllCountries().then((countries) => {
      dispatch(setCountries(countries))
      dispatch(setLoading(false))
    })
  }, [])

  return countriesState
}