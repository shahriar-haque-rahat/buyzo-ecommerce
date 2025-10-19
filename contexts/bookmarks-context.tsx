"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export interface BookmarkItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  isOnSale?: boolean
}

interface BookmarksState {
  items: BookmarkItem[]
}

type BookmarksAction =
  | { type: "ADD_BOOKMARK"; payload: BookmarkItem }
  | { type: "REMOVE_BOOKMARK"; payload: number }
  | { type: "CLEAR_BOOKMARKS" }

const initialState: BookmarksState = {
  items: [],
}

function bookmarksReducer(state: BookmarksState, action: BookmarksAction): BookmarksState {
  switch (action.type) {
    case "ADD_BOOKMARK":
      if (state.items.some((item) => item.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      }

    case "REMOVE_BOOKMARK":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case "CLEAR_BOOKMARKS":
      return { ...state, items: [] }

    default:
      return state
  }
}

const BookmarksContext = createContext<{
  state: BookmarksState
  addBookmark: (item: BookmarkItem) => void
  removeBookmark: (id: number) => void
  clearBookmarks: () => void
  isBookmarked: (id: number) => boolean
} | null>(null)

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookmarksReducer, initialState)

  const addBookmark = (item: BookmarkItem) => {
    dispatch({ type: "ADD_BOOKMARK", payload: item })
  }

  const removeBookmark = (id: number) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: id })
  }

  const clearBookmarks = () => {
    dispatch({ type: "CLEAR_BOOKMARKS" })
  }

  const isBookmarked = (id: number) => {
    return state.items.some((item) => item.id === id)
  }

  return (
    <BookmarksContext.Provider
      value={{
        state,
        addBookmark,
        removeBookmark,
        clearBookmarks,
        isBookmarked,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarksContext)
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarksProvider")
  }
  return context
}
