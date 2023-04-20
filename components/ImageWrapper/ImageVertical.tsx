import Image from "next/image";

interface ImageInterface {
  imgSrc: any;
  altText: string;
  additionalClass?: string;
}

export const ImageVertical = ({
  imgSrc,
  altText,
  additionalClass,
}: ImageInterface) => {
  const classString = !additionalClass
    ? "imgContainerV"
    : `imgContainerV ${additionalClass}`;
  return (
    <div className={classString}>
      <Image
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
        }}
        src={imgSrc}
        alt={altText}
        height={100}
        width={100}
        unoptimized={true}
      />
    </div>
  );
};
