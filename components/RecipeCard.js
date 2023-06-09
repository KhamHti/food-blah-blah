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
          width={500}
          height={500}
          //   sizes={}
          //   fill

          //   width={thumbnail.fields.file.details.image.width}
          //   height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approximately {cookingTime} mins to cook</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`} legacyBehavior>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
      {/* .card {
        transform: rotateZ(1deg);
      } */}
      <style jsx>{`
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;

// {
//   "/recipes/" + slug;
// }
