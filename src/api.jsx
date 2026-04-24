// shubh - api functions for fetching videos
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE = "https://www.googleapis.com/youtube/v3"


export function loadVideos(catId,setVids,setLoading) {
  setLoading(true)
  console.log("loading videos...")

  let url = BASE + "/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&key=" + API_KEY
  if(catId !== 0) {
    url = url + "&videoCategoryId=" + catId
  }

  fetch(url)
    .then(function(res) { return res.json() })
    .then(function(data) {
      console.log("got videos",data)
      setVids(data.items || [])
      setLoading(false)
    })
    .catch(function(err) {
      console.log("error loading videos",err)
      setLoading(false)
    })
}

export function searchVideos(query,setVids,setLoading) {
  setLoading(true)
  console.log("searching:",query)

  let searchUrl = BASE + "/search?part=snippet&maxResults=20&q=" + query + "&type=video&key=" + API_KEY

  fetch(searchUrl)
    .then(function(res) { return res.json() })
    .then(function(data) {
      console.log("search results",data)
      let ids = ""
      for(let i=0; i < data.items.length; i++) {
        if(i > 0) ids += ","
        ids += data.items[i].id.videoId
      }
      return fetch(BASE + "/videos?part=snippet,statistics&id=" + ids + "&key=" + API_KEY)
    })
    .then(function(res) { return res.json() })
    .then(function(data) {
      setVids(data.items || [])
      setLoading(false)
    })
    .catch(function(err) {
      console.log("search failed:",err)
      setLoading(false)
    })
}
