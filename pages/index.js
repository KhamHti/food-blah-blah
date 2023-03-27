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
      revalidate: 10,
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
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 2fr 2fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
