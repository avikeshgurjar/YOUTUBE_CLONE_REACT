function CategoryChips(props) {
  let categories = [
    {name:"All", id:0},
    {name:"Music", id:10},
    {name:"Gaming", id:20},
    {name:"News", id:25},
    {name:"Sports", id:17},
    {name:"Entertainment", id:24},
    {name:"Education", id:27},
    {name:"Science & Tech", id:28},
    {name:"Comedy", id:23},
    {name:"Film", id:1},
    {name:"People & Blogs", id:22},
  ]

  return (
    <div className="chips-row">
      {categories.map(function(cat,i) {
        let isActive = props.activeCat === cat.id
        return (
          <button
            key={cat.id}
            className={isActive ? "chip active-chip" : "chip"}
            onClick={function() { props.onPick(cat.id) }}
          >
            {cat.name}
          </button>
        )
      })}
    </div>
  )
}
export default CategoryChips
