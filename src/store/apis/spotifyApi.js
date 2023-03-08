import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const spotifyApi = createApi({
  reducerPath: "spotify",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "1cfed548c6msh03827b7f2d7e802p1307d0jsned496e327d03",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  }),

  endpoints(builder) {
    return {
      fetchTopSongs: builder.query({
        query: (_country) => {
          return {
            url: "/top_200_tracks",
            method: "GET",
            params: { country: _country || "GLOBAL", period: "daily" },
          }
        },
      }),

      fetchTopArtists: builder.query({
        query: () => {
          return {
            url: "/top_20_by_followers",
            method: "GET",
          }
        },
      }),

      searchSongs: builder.query({
        query: (_searchTerm) => {
          return {
            url: "/search",
            method: "GET",
            params: { q: _searchTerm, type: "tracks", limit: "20" },
          }
        },
      }),

      fetchTrack: builder.query({
        query: (_trackId) => {
          return {
            url: "/tracks",
            method: "GET",
            params: { ids: _trackId },
          }
        },
      }),

      fetchTrackLyrics: builder.query({
        query: (_trackId) => {
          return {
            url: "/track_lyrics",
            method: "GET",
            params: { id: _trackId },
          }
        },
      }),

      fetchArtist: builder.query({
        query: (_artistId) => {
          return {
            url: "/artist_overview",
            method: "GET",
            params: { id: _artistId },
          }
        },
      }),
    }
  },
})

export const {
  useFetchArtistQuery,
  useFetchTopArtistsQuery,
  useFetchTopSongsQuery,
  useFetchTrackLyricsQuery,
  useFetchTrackQuery,
  useSearchSongsQuery,
} = spotifyApi
