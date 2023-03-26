import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  const { title, cookingTime, slug, thumbnail } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">
        {/* thumbnail image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={400}
          height={430}

          //   width={thumbnail.fields.file.details.image.width}
          //   height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h3>{title}</h3>
          <p>Takes approximately {cookingTime} mins to cook</p>
        </div>
        <div className="action">
          <Link href={`/recipes/${slug}`}>Cook this</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

// {
//   "/recipes/" + slug;
// }
