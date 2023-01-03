/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark {
    onCreateBookmark {
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
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark {
    onUpdateBookmark {
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
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark {
    onDeleteBookmark {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateBookmakTags = /* GraphQL */ `
  subscription OnCreateBookmakTags {
    onCreateBookmakTags {
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
export const onUpdateBookmakTags = /* GraphQL */ `
  subscription OnUpdateBookmakTags {
    onUpdateBookmakTags {
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
export const onDeleteBookmakTags = /* GraphQL */ `
  subscription OnDeleteBookmakTags {
    onDeleteBookmakTags {
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
