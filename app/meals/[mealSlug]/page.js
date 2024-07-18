// export default function MealsPostPage({ params }) {
//     return (
//         <>
//             <h1>Meals Page</h1>
//             <p>{params.mealSlug}</p>
//         </>
//     )
// }



const mealsData = {
    spaghetti: { name: 'Spaghetti', description: 'Delicious spaghetti with tomato sauce.' },
    pizza: { name: 'Pizza', description: 'Tasty pizza with various toppings.' },
};


export default function MealsPostPage({ meal }) {
    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
        </>
    );
}

export async function generateStaticParams() {
    return [
        { params: { mealSlug: 'spaghetti' } },
        { params: { mealSlug: 'pizza' } },
    ];
}

export async function getStaticProps({ params }) {
    const meal = mealsData[params.mealSlug];

    return {
        props: {
            meal,
        },
    };
}
