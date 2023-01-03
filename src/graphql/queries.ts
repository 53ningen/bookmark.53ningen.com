/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookmark = /* GraphQL */ `
  query GetBookmark($url: ID!) {
    getBookmark(url: $url) {
      url
      title
      comment
      iconUrl
      dead
      tags {
        items {
          id
          bookmarkID
          tagID
          bookmark {
            url
            title
            comment
            iconUrl
            dead
            type
            createdAt
            updatedAt
          }
          tag {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      createdAt
      updatedAt
    }
  }
`;
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $url: ID
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBookmarks(
      url: $url
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        url
        title
        comment
        iconUrl
        dead
        tags {
          items {
            id
            bookmarkID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBookmarksOrderByCreatedAt = /* GraphQL */ `
  query ListBookmarksOrderByCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarksOrderByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        url
        title
        comment
        iconUrl
        dead
        tags {
          items {
            id
            bookmarkID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      bookmarks {
        items {
          id
          bookmarkID
          tagID
          bookmark {
            url
            title
            comment
            iconUrl
            dead
            type
            createdAt
            updatedAt
          }
          tag {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookmarks {
          items {
            id
            bookmarkID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookmakTags = /* GraphQL */ `
  query GetBookmakTags($id: ID!) {
    getBookmakTags(id: $id) {
      id
      bookmarkID
      tagID
      bookmark {
        url
        title
        comment
        iconUrl
        dead
        tags {
          items {
            id
            bookmarkID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        createdAt
        updatedAt
      }
      tag {
        id
        bookmarks {
          items {
            id
            bookmarkID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBookmakTags = /* GraphQL */ `
  query ListBookmakTags(
    $filter: ModelBookmakTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmakTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookmarkID
        tagID
        bookmark {
          url
          title
          comment
          iconUrl
          dead
          tags {
            nextToken
          }
          type
          createdAt
          updatedAt
        }
        tag {
          id
          bookmarks {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
