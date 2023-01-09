/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmarkTag = /* GraphQL */ `
  subscription OnCreateBookmarkTag {
    onCreateBookmarkTag {
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
      tag {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBookmarkTag = /* GraphQL */ `
  subscription OnUpdateBookmarkTag {
    onUpdateBookmarkTag {
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
      tag {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBookmarkTag = /* GraphQL */ `
  subscription OnDeleteBookmarkTag {
    onDeleteBookmarkTag {
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
      tag {
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
      createdAt
      updatedAt
    }
  }
`;
