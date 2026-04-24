function Sidebar(props) {
  let links = [
    {name:"Home", icon:"🏠"},
    {name:"Trending", icon:"🔥"},
    {name:"Subscriptions", icon:"📺"},
    {name:"Library", icon:"📚"},
    {name:"History", icon:"⏳"},
  ]
  let moreLinks = [
    {name:"Movies", icon:"🎬"},
    {name:"Gaming", icon:"🎮"},
    {name:"News", icon:"📰"},
    {name:"Sports", icon:"⚽"},
  ]


  return (
    <div className={props.isOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed"}>
      {links.map(function(item,i) {
        return (
          <div className="side-link" key={i}>
            <span className="side-icon">{item.icon}</span>
            {props.isOpen && <span>{item.name}</span>}
          </div>
        )
      })}

      {props.isOpen && <hr className="divider" />}

      {props.isOpen && moreLinks.map(function(item,i) {
        return (
          <div className="side-link" key={"extra"+i}>
            <span className="side-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}


export default Sidebar
