

// export default function MealsPostPage({ params }) {
//     return (
//         <>
//             <h1>Meals Page</h1>
//             <p>{params.mealSlug}</p>
//         </>
//     )
// }


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }) {
    const { slug } = params
    // ...
  }