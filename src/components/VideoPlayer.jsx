// mit - video player page
function VideoPlayer(props) {
  let vid = props.video
  let vidId = typeof vid.id === "string" ? vid.id : vid.id.videoId
  console.log("playing:",vid.snippet.title)

  function formatCount(num) {
    num = Number(num)
    if(num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if(num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num
  }

  function calcTime(date) {
    let ms = Date.now() - new Date(date).getTime()
    let days = Math.floor(ms / 86400000)

    if(days > 365) return Math.floor(days / 365) + " years ago"
    if(days > 30) return Math.floor(days / 30) + " months ago"
    if(days > 7) return Math.floor(days / 7) + " weeks ago"
    if(days > 0) return days + " days ago"

    let hrs = Math.floor(ms / 3600000)
    if(hrs > 0) return hrs + " hours ago"
    return "just now"
  }


  return (
    <div className="player-page">
      <button className="back-btn" onClick={props.onBack}>
        ← Back to Home
      </button>

      <div className="player-wrap">
        <iframe
          className="player-frame"
          src={"https://www.youtube.com/embed/" + vidId + "?autoplay=1"}
          title={vid.snippet.title}
          allowFullScreen
        ></iframe>
      </div>

      <div className="player-info">
        <h1 className="player-title">{vid.snippet.title}</h1>
        <div className="player-stats">
          {vid.statistics && <span>{formatCount(vid.statistics.viewCount)} views</span>}
          <span>{calcTime(vid.snippet.publishedAt)}</span>
          {vid.statistics && <span>👍 {formatCount(vid.statistics.likeCount)}</span>}
        </div>

        <div className="channel-section">
          <div className="channel-pic">
            {vid.snippet.channelTitle[0]}
          </div>
          <h3 className="channelName">{vid.snippet.channelTitle}</h3>
        </div>
        <div className="description">
          <p>{vid.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}
export default VideoPlayer
