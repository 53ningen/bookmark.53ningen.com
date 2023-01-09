/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookmarkInput = {
  url: string,
  title: string,
  comment: string,
  iconUrl?: string | null,
  dead: boolean,
  type: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBookmarkConditionInput = {
  title?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  iconUrl?: ModelStringInput | null,
  dead?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookmarkConditionInput | null > | null,
  or?: Array< ModelBookmarkConditionInput | null > | null,
  not?: ModelBookmarkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Bookmark = {
  __typename: "Bookmark",
  url: string,
  title: string,
  comment: string,
  iconUrl?: string | null,
  dead: boolean,
  tags?: ModelBookmarkTagConnection | null,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookmarkTagConnection = {
  __typename: "ModelBookmarkTagConnection",
  items:  Array<BookmarkTag | null >,
  nextToken?: string | null,
};

export type BookmarkTag = {
  __typename: "BookmarkTag",
  id: string,
  bookmarkID: string,
  tagID: string,
  bookmark: Bookmark,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  bookmarks?: ModelBookmarkTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBookmarkInput = {
  url: string,
  title?: string | null,
  comment?: string | null,
  iconUrl?: string | null,
  dead?: boolean | null,
  type?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBookmarkInput = {
  url: string,
};

export type CreateTagInput = {
  id?: string | null,
};

export type ModelTagConditionInput = {
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateBookmarkTagInput = {
  id?: string | null,
  bookmarkID: string,
  tagID: string,
};

export type ModelBookmarkTagConditionInput = {
  bookmarkID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelBookmarkTagConditionInput | null > | null,
  or?: Array< ModelBookmarkTagConditionInput | null > | null,
  not?: ModelBookmarkTagConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBookmarkTagInput = {
  id: string,
  bookmarkID?: string | null,
  tagID?: string | null,
};

export type DeleteBookmarkTagInput = {
  id: string,
};

export type ModelBookmarkFilterInput = {
  url?: ModelIDInput | null,
  title?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  iconUrl?: ModelStringInput | null,
  dead?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookmarkFilterInput | null > | null,
  or?: Array< ModelBookmarkFilterInput | null > | null,
  not?: ModelBookmarkFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBookmarkConnection = {
  __typename: "ModelBookmarkConnection",
  items:  Array<Bookmark | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelBookmarkTagFilterInput = {
  id?: ModelIDInput | null,
  bookmarkID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelBookmarkTagFilterInput | null > | null,
  or?: Array< ModelBookmarkTagFilterInput | null > | null,
  not?: ModelBookmarkTagFilterInput | null,
};

export type CreateBookmarkMutationVariables = {
  input: CreateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type CreateBookmarkMutation = {
  createBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookmarkMutationVariables = {
  input: UpdateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkMutation = {
  updateBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookmarkMutationVariables = {
  input: DeleteBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type DeleteBookmarkMutation = {
  deleteBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookmarkTagMutationVariables = {
  input: CreateBookmarkTagInput,
  condition?: ModelBookmarkTagConditionInput | null,
};

export type CreateBookmarkTagMutation = {
  createBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookmarkTagMutationVariables = {
  input: UpdateBookmarkTagInput,
  condition?: ModelBookmarkTagConditionInput | null,
};

export type UpdateBookmarkTagMutation = {
  updateBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookmarkTagMutationVariables = {
  input: DeleteBookmarkTagInput,
  condition?: ModelBookmarkTagConditionInput | null,
};

export type DeleteBookmarkTagMutation = {
  deleteBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookmarkQueryVariables = {
  url: string,
};

export type GetBookmarkQuery = {
  getBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookmarksQueryVariables = {
  url?: string | null,
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBookmarksQuery = {
  listBookmarks?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBookmarksOrderByCreatedAtQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarksOrderByCreatedAtQuery = {
  listBookmarksOrderByCreatedAt?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookmarkTagQueryVariables = {
  id: string,
};

export type GetBookmarkTagQuery = {
  getBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookmarkTagsQueryVariables = {
  filter?: ModelBookmarkTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarkTagsQuery = {
  listBookmarkTags?:  {
    __typename: "ModelBookmarkTagConnection",
    items:  Array< {
      __typename: "BookmarkTag",
      id: string,
      bookmarkID: string,
      tagID: string,
      bookmark:  {
        __typename: "Bookmark",
        url: string,
        title: string,
        comment: string,
        iconUrl?: string | null,
        dead: boolean,
        tags?:  {
          __typename: "ModelBookmarkTagConnection",
          items:  Array< {
            __typename: "BookmarkTag",
            id: string,
            bookmarkID: string,
            tagID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        type: string,
        createdAt: string,
        updatedAt: string,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        bookmarks?:  {
          __typename: "ModelBookmarkTagConnection",
          items:  Array< {
            __typename: "BookmarkTag",
            id: string,
            bookmarkID: string,
            tagID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookmarkSubscription = {
  onCreateBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookmarkSubscription = {
  onUpdateBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookmarkSubscription = {
  onDeleteBookmark?:  {
    __typename: "Bookmark",
    url: string,
    title: string,
    comment: string,
    iconUrl?: string | null,
    dead: boolean,
    tags?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    bookmarks?:  {
      __typename: "ModelBookmarkTagConnection",
      items:  Array< {
        __typename: "BookmarkTag",
        id: string,
        bookmarkID: string,
        tagID: string,
        bookmark:  {
          __typename: "Bookmark",
          url: string,
          title: string,
          comment: string,
          iconUrl?: string | null,
          dead: boolean,
          tags?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          type: string,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          bookmarks?:  {
            __typename: "ModelBookmarkTagConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBookmarkTagSubscription = {
  onCreateBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookmarkTagSubscription = {
  onUpdateBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookmarkTagSubscription = {
  onDeleteBookmarkTag?:  {
    __typename: "BookmarkTag",
    id: string,
    bookmarkID: string,
    tagID: string,
    bookmark:  {
      __typename: "Bookmark",
      url: string,
      title: string,
      comment: string,
      iconUrl?: string | null,
      dead: boolean,
      tags?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      type: string,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      bookmarks?:  {
        __typename: "ModelBookmarkTagConnection",
        items:  Array< {
          __typename: "BookmarkTag",
          id: string,
          bookmarkID: string,
          tagID: string,
          bookmark:  {
            __typename: "Bookmark",
            url: string,
            title: string,
            comment: string,
            iconUrl?: string | null,
            dead: boolean,
            type: string,
            createdAt: string,
            updatedAt: string,
          },
          tag:  {
            __typename: "Tag",
            id: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
