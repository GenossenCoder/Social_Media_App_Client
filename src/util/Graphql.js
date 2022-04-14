import {gql} from '@apollo/client'

export const FETCH_POSTS_QUERY = gql`
    {
    getPosts{
      id
      theme
      title
      content
      createdAt
      username
      comments {
        content
        username
        createdAt
        likes {
          id
        }
      }
      likes {
        id
      }
    }
    }
`