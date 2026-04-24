import { useState } from "react"


function Navbar(props) {
  const [searchText,setSearchText] = useState("")

  function submitSearch(e) {
    e.preventDefault()
    console.log("searched for:",searchText)
    props.onSearch(searchText)
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={props.onMenuClick}>
          ☰
        </button>

        <div className="logo">
          <span style={{color:"red",fontSize:"24px",marginRight:"4px"}}>▶</span>
          <span className="logo-text">YouTube</span>
        </div>
      </div>

      <div className="nav-middle">
        <form className="searchForm" onSubmit={submitSearch}>
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={function(e) { setSearchText(e.target.value) }}
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </div>

      <div className="nav-right">
        <button className="theme-btn" onClick={props.onThemeToggle}>
          {props.isDark ? "☀️" : "🌙"}
        </button>
        <span className="avatar">👤</span>
      </div>
    </nav>
  )
}

export default Navbar
