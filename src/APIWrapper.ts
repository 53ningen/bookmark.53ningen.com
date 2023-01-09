import { GraphQLResult } from '@aws-amplify/api-graphql'
import { API, graphqlOperation } from 'aws-amplify'
import {
  Bookmark,
  BookmarkTag,
  CreateBookmarkInput,
  CreateBookmarkMutation,
  CreateBookmarkTagInput,
  CreateBookmarkTagMutation,
  CreateTagInput,
  CreateTagMutation,
  DeleteBookmarkInput,
  DeleteBookmarkMutation,
  DeleteBookmarkTagInput,
  DeleteBookmarkTagMutation,
  GetBookmarkQuery,
  GetBookmarkQueryVariables,
  GetTagQuery,
  GetTagQueryVariables,
  Tag,
  UpdateBookmarkInput,
  UpdateBookmarkMutation,
} from './API'
import {
  createBookmark,
  createBookmarkTag,
  createTag,
  deleteBookmark,
  deleteBookmarkTag,
  updateBookmark,
} from './graphql/mutations'
import { getBookmark, getTag } from './graphql/queries'

export const getBookmarkRequest = async (query: GetBookmarkQueryVariables) => {
  try {
    const res = (await API.graphql(graphqlOperation(getBookmark, query))) as GraphQLResult<GetBookmarkQuery>
    if (!res.errors) {
      return res.data?.getBookmark as Bookmark
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<GetBookmarkQuery>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const getTagRequest = async (query: GetTagQueryVariables) => {
  try {
    const res = (await API.graphql(graphqlOperation(getTag, query))) as GraphQLResult<GetTagQuery>
    if (!res.errors) {
      return res.data?.getTag as Tag | undefined
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<GetTagQuery>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const addBookmarkRequest = async (input: CreateBookmarkInput) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(createBookmark, { input })
    )) as GraphQLResult<CreateBookmarkMutation>
    if (res.data?.createBookmark) {
      return res.data.createBookmark as Bookmark
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<CreateBookmarkMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const addTagRequest = async (input: CreateTagInput) => {
  try {
    const res = (await API.graphql(graphqlOperation(createTag, { input }))) as GraphQLResult<CreateTagMutation>
    if (res.data?.createTag) {
      return res.data.createTag as Tag
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<CreateTagMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const addBookmarkTagRequest = async (input: CreateBookmarkTagInput) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(createBookmarkTag, { input })
    )) as GraphQLResult<CreateBookmarkTagMutation>
    if (res.data?.createBookmarkTag) {
      return res.data.createBookmarkTag as BookmarkTag
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<CreateBookmarkTagMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const updateBookmarkRequest = async (input: UpdateBookmarkInput) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(updateBookmark, { input })
    )) as GraphQLResult<UpdateBookmarkMutation>
    if (res.data?.updateBookmark) {
      return res.data.updateBookmark as Bookmark
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<UpdateBookmarkMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const deleteBookmarkRequest = async (input: DeleteBookmarkInput) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(deleteBookmark, { input })
    )) as GraphQLResult<DeleteBookmarkMutation>
    if (res.data?.deleteBookmark) {
      return res.data.deleteBookmark as Bookmark
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<DeleteBookmarkMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}

export const deleteBookmarkTagRequest = async (input: DeleteBookmarkTagInput) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(deleteBookmarkTag, { input })
    )) as GraphQLResult<DeleteBookmarkTagMutation>
    if (res.data?.deleteBookmarkTag) {
      return res.data.deleteBookmarkTag
    } else {
      throw new Error('unexpected error')
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    } else if (typeof e === 'object' && e && 'errors' in e) {
      const { errors } = e as GraphQLResult<DeleteBookmarkTagMutation>
      if (errors && errors.length > 0) {
        throw Error(errors[0].message)
      }
    }
    throw Error('unexpected error')
  }
}
