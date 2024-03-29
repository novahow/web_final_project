import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App'
import App2 from './App2'
import PhotoLibrary from './photoLibrary/PhotoLibrary'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { ApolloLink, HttpLink, from, split, execute } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
//import * as serviceWorker from './serviceWorker'

const httpLink = new HttpLink({
  uri: "http://localhost:4000/"
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: { reconnect: true }
  
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({})
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
//serviceWorker.unregister()
