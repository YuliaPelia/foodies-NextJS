'use server';// - означає, що функція буде виконуватись лише на стороні сервера

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


const isInvalid = (value) => {

    return !value || value.trim() === ''
}
export const shareMeal = async (prevState, formData) => {


    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')

    }
    if (
        isInvalid(meal.title) ||
        isInvalid(meal.summary) ||
        isInvalid(meal.instructions) ||
        isInvalid(meal.creator) ||
        isInvalid(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}