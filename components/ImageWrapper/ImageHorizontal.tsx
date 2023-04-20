import Image from "next/image";

interface ImageInterface {
  imgSrc: any;
  altText: string;
  additionalClass?: string;
}

export const ImageHorizontal = ({
  imgSrc,
  altText,
  additionalClass,
}: ImageInterface) => {
  const classString = !additionalClass
    ? "imgContainerH"
    : `imgContainerH ${additionalClass}`;
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
