

export default function MealsPostPage({ params }) {
    return (
        <>
            <h1>Meals Page</h1>
            <p>{params.mealSlug}</p>
        </>
    )
}