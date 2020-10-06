import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Pages/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
