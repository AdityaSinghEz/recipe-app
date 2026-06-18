function Hero() {
    return (
        <section id="hero">
            <div className="hero_text">
                <span>🍜 Find your recipe</span>
                <h1>Recipes built around your goals.</h1>
                <form role="search">
                    <input type="search" placeholder="Recipe name" />
                    <button type="submit">Submit</button>
                </form>
                <a href="#recipes">Recipes</a>
            </div>
            <div className="hero_image">
                <img src="images\anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="recipe-bowl" />
            </div>
        </section>
    )
}

export default Hero