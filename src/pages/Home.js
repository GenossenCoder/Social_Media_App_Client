import React from 'react'
import Navbar from '../components/Navbar'
import PostContainer from '../components/PostContainer'
import {gql,useQuery} from '@apollo/client'

const FETCH_THEMES = gql`
query {
  getThemes{
    theme
    posts
  }
}
`

const Home = () => {
  const {loading,data} = useQuery(FETCH_THEMES)
  return (
    <div className="flex flex-col flex-1">
        <div className="flex "><Navbar/></div>
        {loading?(<div>loading</div>):(
            data&&
            data.getThemes.map((theme) =>(
              <div className="flex"><PostContainer theme={theme}/></div>
            ))
          )}
    </div>
  )
}

export default Home