import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;


export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
      email
      pet
      posts {
        _id
        postText
        createdAt
        timestamp
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      postAuthor {
        _id
        name
      }
      postText
      postImageURL
      createdAt
      timestamp
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      postAuthor {
        _id
        name
      }
      postText
      postImageURL
      createdAt
      timestamp
      comments {
        _id
        commentAuthor {
          name
          _id
        }
        commentText
        createdAt
      }
    }
  }
`;