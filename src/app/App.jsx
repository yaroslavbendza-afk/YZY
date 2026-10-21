import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useMatch,
  useNavigate,
  useSearchParams,
} from "react-router";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Footer from "../components/layout/Footer/Footer";
import SoundbarDrawer from "../components/soundbar/SoundbarDrawer/SoundbarDrawer";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { mockPlaylists } from "../data/mockPlaylists";
import styles from "./App.module.css";

const allTracksList = [
  {
    id: "1",
    index: "01",
    title: "Guilt Trip",
    artist: "Kanye West",
    genre: "CLASSICS",
    duration: "4:03",
    imageSrc: "/assets/images/guilt-trip.jpg",
  },
  {
    id: "2",
    index: "02",
    title: "Rockstar Made",
    artist: "Playboi Carti",
    genre: "RAP",
    duration: "3:07",
    imageSrc: "/assets/images/rockstar-made.jpg",
  },
  {
    id: "3",
    index: "03",
    title: "Relevant",
    artist: "Lil Uzi Vert",
    genre: "TRAP",
    duration: "2:02",
    imageSrc: "/assets/images/relevant.jpg",
  },
  {
    id: "4",
    index: "04",
    title: "RATHER LIE",
    artist: "Playboi Carti",
    genre: "RAP",
    duration: "3:21",
    imageSrc: "/assets/images/rather-lie.jpg",
  },
  {
    id: "5",
    index: "05",
    title: "Flashing Lights",
    artist: "Kanye West",
    genre: "CLASSICS",
    duration: "3:57",
    imageSrc: "/assets/images/flashing-lights.jpg",
  },
  {
    id: "6",
    index: "06",
    title: "You Broke My Heart",
    artist: "Drake",
    genre: "HIP-HOP",
    duration: "2:56",
    imageSrc: "/assets/images/you-broke-my-heart.jpg",
  },
  {
    id: "r1",
    index: "01",
    title: "Houdini",
    artist: "Eminem",
    genre: "RAP",
    duration: "3:47",
    imageSrc: "/assets/images/houdini.jpg",
  },
  {
    id: "r2",
    index: "02",
    title: "A Milli",
    artist: "Lil Wayne",
    genre: "CLASSICS",
    duration: "3:41",
    imageSrc: "/assets/images/a-milli.jpg",
  },
  {
    id: "r3",
    index: "03",
    title: "FE!N",
    artist: "Travis Scott ft. Playboi Carti",
    genre: "TRAP",
    duration: "3:11",
    imageSrc: "/assets/images/fein.jpg",
  },
  {
    id: "r4",
    index: "04",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    genre: "HIP-HOP",
    duration: "4:34",
    imageSrc: "/assets/images/not-like-us.jpg",
  },
  {
    id: "r5",
    index: "05",
    title: "Like That",
    artist: "Future & Metro Boomin",
    genre: "TRAP",
    duration: "4:27",
    imageSrc: "/assets/images/like-that.jpg",
  },
  {
    id: "r6",
    index: "06",
    title: "fukumean",
    artist: "Gunna",
    genre: "TRAP",
    duration: "2:05",
    imageSrc: "/assets/images/fukumean.jpg",
  },
];

export default function App() {
  const navigate = useNavigate();
  const isSearchPage = Boolean(useMatch("/search"));
  const [searchParams] = useSearchParams();
  const searchQuery = isSearchPage ? searchParams.get("q") || "" : "";
  const [playlists, setPlaylists] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("yzy.customPlaylists") || "[]",
      );
      const custom = Array.isArray(saved)
        ? saved.filter(
            (playlist) =>
              typeof playlist?.id === "string" &&
              playlist.id.startsWith("custom-") &&
              typeof playlist.title === "string" &&
              playlist.songCount === 0,
          )
        : [];
      return [...mockPlaylists, ...custom];
    } catch {
      return mockPlaylists;
    }
  });
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSoundbarOpen, setIsSoundbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(
        "yzy.customPlaylists",
        JSON.stringify(
          playlists.filter((playlist) => playlist.id.startsWith("custom-")),
        ),
      );
    } catch {
      return;
    }
  }, [playlists]);

  const handleCreatePlaylist = () => {
    const playlist = {
      id: `custom-${crypto.randomUUID()}`,
      title: `My Playlist #${playlists.filter((item) => item.id.startsWith("custom-")).length + 3}`,
      songCount: 0,
      imageSrc: "/assets/images/guilt-trip.jpg",
    };
    setPlaylists((previous) => [...previous, playlist]);
    navigate(`/playlist/${playlist.id}`);
  };

  const handleSearchChange = (query) => {
    const params = new URLSearchParams(isSearchPage ? searchParams : undefined);
    if (query) params.set("q", query);
    else params.delete("q");
    navigate(
      { pathname: "/search", search: params.toString() },
      { replace: isSearchPage },
    );
  };

  const handleLogin = (profile) => {
    setIsLoggedIn(true);
    setUserProfile(profile);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  const handlePlayTrack = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleTogglePlay = () => {
    if (!currentTrack) {
      setCurrentTrack(allTracksList[0]);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const handlePrevTrack = () => {
    if (!currentTrack) {
      setCurrentTrack(allTracksList[0]);
      setIsPlaying(true);
      return;
    }
    const currentIndex = allTracksList.findIndex(
      (t) => t.id === currentTrack.id,
    );
    const prevIndex =
      currentIndex <= 0 ? allTracksList.length - 1 : currentIndex - 1;
    setCurrentTrack(allTracksList[prevIndex]);
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    if (!currentTrack) {
      setCurrentTrack(allTracksList[0]);
      setIsPlaying(true);
      return;
    }
    const currentIndex = allTracksList.findIndex(
      (t) => t.id === currentTrack.id,
    );
    const nextIndex =
      currentIndex >= allTracksList.length - 1 ? 0 : currentIndex + 1;
    setCurrentTrack(allTracksList[nextIndex]);
    setIsPlaying(true);
  };

  const playbackProps = {
    currentTrack,
    isPlaying,
    onPlayTrack: handlePlayTrack,
  };

  return (
    <div className={styles.appContainer}>
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogout={handleLogout}
      />

      <div className={styles.mainLayout}>
        <Sidebar
          playlists={playlists.filter(
            (playlist) =>
              ["p1", "p2"].includes(playlist.id) ||
              playlist.id.startsWith("custom-"),
          )}
          onCreatePlaylist={handleCreatePlaylist}
        />

        <div className={styles.contentArea}>
          <Routes>
            <Route path="/" element={<HomePage {...playbackProps} />} />
            <Route
              path="/search"
              element={
                <SearchPage
                  {...playbackProps}
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                />
              }
            />
            <Route
              path="/library"
              element={<LibraryPage {...playbackProps} playlists={playlists} />}
            />
            <Route
              path="/playlist/:playlistId"
              element={
                <PlaylistPage {...playbackProps} playlists={playlists} />
              }
            />
            <Route
              path="/auth"
              element={
                <AuthPage
                  onLogin={(profile) => {
                    handleLogin(profile);
                    navigate("/", { replace: true });
                  }}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>

      <Footer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onPrevTrack={handlePrevTrack}
        onNextTrack={handleNextTrack}
        onToggleSoundbar={() => setIsSoundbarOpen((prev) => !prev)}
        isSoundbarOpen={isSoundbarOpen}
      />

      <SoundbarDrawer
        isOpen={isSoundbarOpen}
        onClose={() => setIsSoundbarOpen(false)}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
      />
    </div>
  );
}
