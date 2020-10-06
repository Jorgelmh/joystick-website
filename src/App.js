import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Pages/Landing'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route  exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
