import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataReducer, changeGenre, toggleSidebar } from "./slices/dataSlice"
import {
  shazamApi,
  useFetchArtistQuery,
  useFetchTopArtistsQuery,
  useFetchTopSongsQuery,
  useFetchTrackLyricsQuery,
  useFetchTrackQuery,
  useSearchSongsQuery,
} from "./apis/shazamApi"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
})

setupListeners(store.dispatch)

export {
  useFetchArtistQuery,
  useFetchTopArtistsQuery,
  useFetchTopSongsQuery,
  useFetchTrackLyricsQuery,
  useFetchTrackQuery,
  useSearchSongsQuery,
  changeGenre,
  toggleSidebar,
}
