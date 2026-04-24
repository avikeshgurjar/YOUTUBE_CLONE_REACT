
import VideoCard from "./VideoCard"

function VideoGrid(props) {
  if(props.loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading videos...</p>
      </div>
    )
  }

  console.log("showing",props.vids.length,"videos")
  return (
    <div className="vid-grid">
      {props.vids.map(function(v,i) {
        return (
          <VideoCard key={v.id} video={v} onVideoClick={props.onVideoClick} />
        )
      })}
    </div>
  )
}

export default VideoGrid
