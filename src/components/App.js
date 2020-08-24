import React, { Fragment } from 'react'
import { ApolloProvider } from '@apollo/react-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import apolloClient from '../apolloClient'
import Article from './Article'
import EditArticle from './EditArticle'
import Home from './Home'
import Login from './Login'
import NewArticle from './NewArticle'
import Profile from './Profile'
import Register from './Register'
import Settings from './Settings'
import useViewer from './useViewer'

const CustomRoute = (props) => {
  const viewer = useViewer()
  if (viewer) {
    return <Route {...props} />
  } else {
    return <Redirect to={{ pathname: '/login' }} />
  }
}

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/article/:slug" component={Article} />
          <Route exact path="/editor" component={NewArticle} />
          <Route path="/editor/:slug" component={EditArticle} />
          <CustomRoute path="/settings" component={Settings} />
          <CustomRoute path="/profile/:username" component={Profile} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </ApolloProvider>
)

export default App
