import { createStore } from "redux";

export const playlists = [
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
];
