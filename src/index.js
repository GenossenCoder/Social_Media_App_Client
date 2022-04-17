import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {setContext} from 'apollo-link-context'
import {createHttpLink} from 'apollo-link-http'

import {ApolloClient,ApolloProvider, InMemoryCache} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://t3lk-t.herokuapp.com/'
})

const authLink =setContext(()=>{
  const token = localStorage.getItem('jwtToken');
  return{
    headers: {
      Authorization: token ? `Bearer ${token}`:''
    }
  }
})

const client = new ApolloClient({
  link:authLink.concat(httpLink),
  cache: new InMemoryCache()
})



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider  client={client} >
    <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);