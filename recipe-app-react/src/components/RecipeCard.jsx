function RecipeCard({ title, calories, protein, time, image, tags }) {
    return (
        <article className="recipe-card">
            <div className='card-image'>
                <img src={image} alt={title} />
                <span className='badge'>{tags[0].toUpperCase()}</span>
            </div>
            <div className='card-body'>
                <h3>{title}</h3>
                <p>⏱ {time} · 🔥 {calories} · 💪 {protein}</p>
                <button aria-label="Save to favourites">♡ </button >
            </div >
        </article >
    )
}
export default RecipeCard