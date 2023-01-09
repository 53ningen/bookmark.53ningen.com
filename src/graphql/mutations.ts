/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateBookmark = /* GraphQL */ `
  mutation UpdateBookmark(
    $input: UpdateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    updateBookmark(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createBookmarkTag = /* GraphQL */ `
  mutation CreateBookmarkTag(
    $input: CreateBookmarkTagInput!
    $condition: ModelBookmarkTagConditionInput
  ) {
    createBookmarkTag(input: $input, condition: $condition) {
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
export const updateBookmarkTag = /* GraphQL */ `
  mutation UpdateBookmarkTag(
    $input: UpdateBookmarkTagInput!
    $condition: ModelBookmarkTagConditionInput
  ) {
    updateBookmarkTag(input: $input, condition: $condition) {
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
export const deleteBookmarkTag = /* GraphQL */ `
  mutation DeleteBookmarkTag(
    $input: DeleteBookmarkTagInput!
    $condition: ModelBookmarkTagConditionInput
  ) {
    deleteBookmarkTag(input: $input, condition: $condition) {
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
