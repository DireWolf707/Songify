import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataReducer, changeGenre, toggleSidebar } from "./slices/dataSlice"
import {
  spotifyApi,
  useFetchArtistQuery,
  useFetchTopArtistsQuery,
  useFetchTopSongsQuery,
  useFetchTrackLyricsQuery,
  useFetchTrackQuery,
  useSearchSongsQuery,
  useLazyFetchTopSongsQuery,
} from "./apis/spotifyApi"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
})

setupListeners(store.dispatch)

export {
  useFetchArtistQuery,
  useFetchTopArtistsQuery,
  useFetchTopSongsQuery,
  useFetchTrackLyricsQuery,
  useFetchTrackQuery,
  useSearchSongsQuery,
  useLazyFetchTopSongsQuery,
  changeGenre,
  toggleSidebar,
}
