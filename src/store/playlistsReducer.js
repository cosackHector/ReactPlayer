const GET_PLAYLISTS = 'GET-PLAYLISTS';
const SET_CURRENT_PLAYLIST = 'SET-CURRENT-PLAYLIST';
const ADD_PLAYLIST = 'ADD-PLAYLIST';

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
      title: "Bach - organ",
      coverImageUrl: "../assets/images/Album.jpeg",
      tracks: [
        {
          id: 1,
          trackImageUrl: "../assets/images/Track.jpeg",
          title: "Fantaisie & Fugue BWV 537",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fantaisie & Fugue BWV 537.mp3",
          isHot: false,
        },
        {
          id: 2,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fantaisie & Fugue BWV 542",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fantaisie & Fugue BWV 542.mp3",
          isHot: true,
        },
        {
          id: 3,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fantaisie & Fugue BWV 562",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fantaisie & Fugue BWV 562.mp3",
          isHot: false,
        },
        {
          id: 4,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fantaisie & Fugue BWV 572",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fantaisie & Fugue BWV 572.mp3",
          isHot: true,
        },
        {
          id: 5,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fugue BWV 575",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fugue BWV 575.mp3",
          isHot: false,
        },
        {
          id: 6,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fugue BWV 577",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fugue BWV 577.mp3",
          isHot: true,
        },
        {
          id: 7,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fugue BWV 578",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fugue BWV 578.mp3",
          isHot: true,
        },
        {
          id: 6,
          trackImageUrl: "./assets/images/Track.jpeg",
          title: "Fugue BWV 579",
          artistName: "Bach",
          fileUrl: "../assets/music/Bach/Fugue BWV 579.mp3",
          isHot: true,
        },
      ],
    },
  ],
  currentPlaylist: {
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
};



export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLISTS: 
      return {
        ...state
      }

      case SET_CURRENT_PLAYLIST: 
        const currentPlaylist = state.playlists.find((playlist => playlist.id === action.playlistId))
        return {
          ...state, 
          currentPlaylist: state.currentPlaylist, currentPlaylist
        }

        case ADD_PLAYLIST:
          const playlist = {
            id: 999,
            title: action.title,
            coverImageUrl: action.coverImageUrl,
            tracks: []
          }
          return {
            ...state,
            playlists: [...state.playlists, playlist]
          }
  }
  return state;
};


export const getPlaylistsAC = () => ({ type: GET_PLAYLISTS });
export const setCurrentPlaylist = (playlistId) => ({ type: SET_CURRENT_PLAYLIST, playlistId });
export const addPlaylistAC = (title, coverImageUrl = null) => ({type: ADD_PLAYLIST, title, coverImageUrl});
