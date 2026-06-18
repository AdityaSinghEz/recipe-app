import RecipeCard from "./RecipeCard.jsx";

function RecipeGrid() {
    return (
        <div>
            <RecipeCard title="Chicken Rice Bowl"
                calories={480}
                protein={42}
                time={25}
                image="https://placehold.co/400x300"
                tags={["high-protein", "quick"]} />
        </div>
    )
}

export default RecipeGrid