// shubh - main app component
import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import HomePage from "./HomePage"
import VideoPlayer from "./components/VideoPlayer"
import { loadVideos,searchVideos } from "./api"
import "./App.css"


function App() {
  const [vids,setVids] = useState([])
  const [currentVid,setCurrentVid] = useState(null)
  const [isDark,setIsDark] = useState(false)
  const [activeCat,setActiveCat] = useState(0)
  const [showSidebar,setShowSidebar] = useState(true)
  const [loading,setLoading] = useState(true)

  useEffect(function() {
    loadVideos(activeCat,setVids,setLoading)
  }, [activeCat])

  function doSearch(query) {
    if(!query) return
    setCurrentVid(null)
    setActiveCat(0)
    searchVideos(query,setVids,setLoading)
  }


  function openVideo(vid) {
    console.log("opening:",vid.snippet.title)
    setCurrentVid(vid)
    window.scrollTo(0,0)
  }

  function goBack() {
    setCurrentVid(null)
  }

  function pickCategory(catId) {
    console.log("picked category:",catId)
    setActiveCat(catId)
    setCurrentVid(null)
  }

  function switchTheme() {
    setIsDark(!isDark)
  }
  function toggleSide() {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <Navbar
        onSearch={doSearch}
        isDark={isDark}
        onThemeToggle={switchTheme}
        onMenuClick={toggleSide}
      />

      <div className="main-wrap">
        <Sidebar isOpen={showSidebar} isDark={isDark} />

        <div className={showSidebar ? "content with-sidebar" : "content full-width"}>
          {currentVid ? (
            <VideoPlayer video={currentVid} onBack={goBack} isDark={isDark} />
          ) : (
            <HomePage
              vids={vids}
              loading={loading}
              activeCat={activeCat}
              onPick={pickCategory}
              onVideoClick={openVideo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
