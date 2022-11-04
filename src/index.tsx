import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store, RestCountryService } from "store"

import { App } from "components"

const restCountryService = new RestCountryService()

restCountryService.fetchAllCountries().then(console.log)

const root = document.getElementById("root")!

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
)