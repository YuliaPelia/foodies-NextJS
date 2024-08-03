'use server';   // - означає, що функція буде виконуватись лише на стороні сервера


export const shareMeal = async (formData) => {


    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')

    }

    console.log(meal);
}