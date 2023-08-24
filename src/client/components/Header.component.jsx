import Nav from './Nav.component';

const navLinks = [
  {
      link: "/",
      text: "about",
      onClick: "#"
  },
  {
      link: "/contact",
      text: "contact",
      onClick: "#"
  },
  {
    link: "/projects",
    text: "projects",
    onClick: "#"
  }
]


const Header = () => {

return (

  <header>
  <div className="header-content">
      <div className="title">
        <h1>Joshua Stanford</h1>
        <p className="subtitle">Web developer</p>
      </div>
    <Nav links={navLinks}/>
  </div>
</header>

)

}

export default Header;