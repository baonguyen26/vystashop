import {
  im_gaming,
  im_music,
  im_electronic,
  im_toy,
  im_hobby,
  im_baby,
  im_health,
  im_clothing,
  im_sport,
  im_office,
  im_food,
  im_lifestyle,
  im_garden,
  im_pet,
  im_car,
} from ".";

const image = {
  im_gaming,
  im_music,
  im_electronic,
  im_toy,
  im_hobby,
  im_baby,
  im_health,
  im_clothing,
  im_sport,
  im_office,
  im_food,
  im_lifestyle,
  im_garden,
  im_pet,
  im_car,
} satisfies Record<string, string>;

type LocalImageProps = {
  name: keyof typeof image;
  alt?: string;
  height?: number | "auto";
  width?: number | "auto";
  className?: string;
};

/**
 * Generator image component
 */
export const LocalImage = ({
  name,
  alt = "",
  height = 24,
  width = 24,
  className = "",

  ...props
}: LocalImageProps) => {
  const ImgSrc = image[name];

  return (
    <img
      src={ImgSrc}
      alt={alt}
      className={className}
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  );
};
