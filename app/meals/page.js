
import { useRouter } from 'next/navigation';

const MealPage = ({ meal }) => {
    const router = useRouter();

    return (
        <div>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
        </div>
    );
};

export async function generateStaticParams() {
    // Отримайте дані для страв
    const response = await fetch('https://api.example.com/meals');
    const meals = await response.json();

    // Поверніть шляхи для кожної страви
    const paths = meals.map(meal => ({
        params: { mealSlug: meal.slug },
    }));

    return paths;
}

export async function getStaticProps({ params }) {
    // Отримайте дані для конкретної страви
    const response = await fetch(`https://api.example.com/meals/${params.mealSlug}`);
    const meal = await response.json();

    return {
        props: {
            meal,
        },
    };
}

export default MealPage;
