import RecipeCard from "@/components/RecipeCard";
import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });
  // const data = res.json();
  return {
    props: {
      recipes: res.items,
    },
  };
};

export default function Recipes({ recipes }) {
  // console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
