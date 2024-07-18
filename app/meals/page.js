import { useRouter } from 'next/router';

const MealPage = ({ meal }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
        </div>
    );
};

export async function generateStaticParams() {
    // Fetch your data for meals
    const response = await fetch('https://api.example.com/meals');
    const meals = await response.json();

    // Return the paths for each meal
    const paths = meals.map(meal => ({
        params: { mealSlug: meal.slug },
    }));

    return paths;
}

export async function getStaticProps({ params }) {
    // Fetch data for the specific meal
    const response = await fetch(`https://api.example.com/meals/${params.mealSlug}`);
    const meal = await response.json();

    return {
        props: {
            meal,
        },
    };
}

export default MealPage;
