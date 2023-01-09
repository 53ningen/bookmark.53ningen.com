import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { Bookmark } from '../API'
import { useAuth } from '../context/AuthContext'
import { BookmarkForm } from './BookmarkForm'
import { BookmarkListItem, BookmarkListSkeltonItem } from './BookmarkListItem'
import { ErrorBanner } from './ErrorBanner'

export interface BookmarkListProps {
  initBookmarks?: Bookmark[]
  initNextToken?: string
  initErrorMessage?: string
}

export const BookmarkList = ({ initBookmarks, initNextToken, initErrorMessage }: BookmarkListProps) => {
  const { isLoggedIn } = useAuth()
  const [bookmarks, setBookmarks] = useState<Bookmark[] | undefined>(initBookmarks)
  const [nextToken, setNextToken] = useState<string | undefined>(initNextToken)
  const [errorMessage] = useState<string | undefined>(initErrorMessage)

  useEffect(() => {
    ;(() => {
      setBookmarks(initBookmarks)
    })()
  }, [initBookmarks])

  const onAdded = (added: Bookmark) => {
    setBookmarks([added, ...(bookmarks || [])])
  }
  const onDeleted = (url: string) => {
    setBookmarks(bookmarks?.filter((b) => b.url !== url))
  }
  const onUpdated = (updated: Bookmark) => {
    setBookmarks(bookmarks?.map((b) => (b.url === updated.url ? updated : b)))
  }
  if (bookmarks) {
    return (
      <Stack spacing={2}>
        <ErrorBanner errorMessage={errorMessage} />
        {isLoggedIn() && <BookmarkForm onAdded={onAdded} />}
        {bookmarks.map((b) => (
          <BookmarkListItem
            key={b.url.toString()}
            bookmark={b}
            editable={isLoggedIn()}
            onUpdated={onUpdated}
            onDeleted={onDeleted}
          />
        ))}
      </Stack>
    )
  } else {
    return (
      <Stack spacing={2}>
        {isLoggedIn() && <BookmarkForm onAdded={onAdded} />}
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
        <BookmarkListSkeltonItem />
      </Stack>
    )
  }
}
