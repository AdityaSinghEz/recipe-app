function FilterPills() {
    return (
        <section id="filters">
            <div className="filter-pills">
                <button data-filter="all" className="active">All</button>
                <button data-filter="high-protein">High-Protein</button>
                <button data-filter="weight-loss">Weight-Loss</button>
                <button data-filter="bulking">Bulking</button>
                <button data-filter="healthy-snack">Healthy Snacks</button>
                <button data-filter="recovery">Recovery</button>
                <button data-filter="low-calorie">Low Calorie</button>
                <button data-filter="vegetarian">Vegetarian</button>
                <button data-filter="quick">Quick Meals</button>
                <button data-filter="budget">Budget</button>
            </div>
        </section>
    )
}

export default FilterPills