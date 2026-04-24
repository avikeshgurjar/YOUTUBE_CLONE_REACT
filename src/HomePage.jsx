
import CategoryChips from "./components/CategoryChips"
import VideoGrid from "./components/VideoGrid"

function HomePage(props) {
  return (
    <>
      <CategoryChips
        activeCat={props.activeCat}
        onPick={props.onPick}
      />
      <VideoGrid
        vids={props.vids}
        onVideoClick={props.onVideoClick}
        loading={props.loading}
      />
    </>
  )
}
export default HomePage
