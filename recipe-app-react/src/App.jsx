import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import FilterPills from "./components/FilterPills.jsx"
import RecipeGrid from "./components/RecipeGrid.jsx"
import Categories from "./components/Categories.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FilterPills />
      <RecipeGrid/>
      <Categories/>
      <Footer/>
    </div>
  )
}
export default App