// mit - single video card
function VideoCard(props) {
  let video = props.video
  let thumb = video.snippet.thumbnails.medium || video.snippet.thumbnails.default


  function showViews(n) {
    if(!n) return "0 views"
    n = parseInt(n)
    if(n > 1000000) return Math.floor(n / 1000000) + "M views"
    if(n > 1000) return Math.floor(n / 1000) + "K views"
    return n + " views"
  }
  function getTimeAgo(dateStr) {
    let now = new Date()
    let past = new Date(dateStr)
    let diff = Math.floor((now - past) / 1000)

    let years = Math.floor(diff / 31536000)
    if(years > 0) return years + " years ago"
    let months = Math.floor(diff / 2592000)
    if(months > 0) return months + " months ago"
    let days = Math.floor(diff / 86400)
    if(days > 0) return days + " days ago"
    let hours = Math.floor(diff / 3600)
    if(hours > 0) return hours + " hours ago"

    return "just now"
  }

  return (
    <div className="vid-card" onClick={function() { props.onVideoClick(video) }}>
      <div className="thumb-wrap">
        <img className="thumb-img" src={thumb.url} alt={video.snippet.title} />
      </div>
      <div className="vid-info">
        <div className="channel-icon">
          {video.snippet.channelTitle[0]}
        </div>
        <div className="vid-details">
          <h3 className="vid-title">{video.snippet.title}</h3>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <p className="vid-stats">
            {video.statistics ? showViews(video.statistics.viewCount) : ""}
            {video.statistics ? " • " : ""}
            {getTimeAgo(video.snippet.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
