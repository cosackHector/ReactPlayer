import { playlists } from "./store";

const GET_PLAYLISTS = 'GET-PLAYLISTS';
const SET_CURRENT_PLAYLIST = 'SET-CURRENT-PLAYLIST';

const initialState = {
  playlists: [
    {
      id: 1,
      title: "Руки вверх",
      coverImageUrl: "../assets/images/Album.jpeg",
      tracks: [
        {
          id: 1,
          trackImageUrl: "../assets/images/Track.jpeg",
          title: "Некрасива",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/1.mp3",
          isHot: false,
        },
        {
          id: 2,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Алешка",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/2.mp3",
          isHot: true,
        },
        {
          id: 3,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Лишь о тебе мечтая",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/3.mp3",
          isHot: false,
        },
        {
          id: 4,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Чужие губы",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/4.mp3",
          isHot: true,
        },
        {
          id: 5,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Пропадаешь зря",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/5.mp3",
          isHot: false,
        },
        {
          id: 6,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Она меня целует",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/6.mp3",
          isHot: true,
        },
      ],
    },
    {
      id: 2,
      title: "Руки вверх",
      coverImageUrl: "../assets/images/Album.jpeg",
      tracks: [
        {
          id: 2,
          trackImageUrl: "../assets/images/Track.jpeg",
          title: "Некрасива",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/1.mp3",
          isHot: false,
        },
        {
          id: 2,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Алешка",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/2.mp3",
          isHot: true,
        },
        {
          id: 3,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Лишь о тебе мечтая",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/3.mp3",
          isHot: false,
        },
        {
          id: 4,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Чужие губы",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/4.mp3",
          isHot: true,
        },
        {
          id: 5,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Пропадаешь зря",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/5.mp3",
          isHot: false,
        },
        {
          id: 6,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Она меня целует",
          artistName: "Руки вверх",
          fileUrl: "../assets/music/SergeyJukov/6.mp3",
          isHot: true,
        },
      ],
    },
  ],
  currentPlaylist: []
};


const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLISTS: 
      return {
        ...state
      }

      case SET_CURRENT_PLAYLIST: 
        const playlist = state.playlists.filter((playlist => playlist.id === action.playlistId))
        return {
          ...state, 
          currentPlaylist: [...state.currentPlaylist, playlist]
        }
  }
  return state;
};


const getPlaylistsAC = () => ({ type: GET_PLAYLISTS });
export const setCurrentPlaylist = (playlistId) => ({ type: SET_CURRENT_PLAYLIST, playlistId });

export default playlistReducer;