import "./App.css"


import Body from "../components/body/Body"
import Footer from "../components/footer/Footer"
import Nav from "../components/header/Nav"
import NavLateral from "../components/navLateral/NavLateral"


const App = () => {
  return (
    <div className={"App"}>
      <Nav />
      <NavLateral />

       <Body />

      <Footer />
    </div>
  )
}

export default App