import Image from "next/image";
import styles from "./CustomImage.module.scss";
import classNames from "classnames";
interface ImageInterface {
  imgSrc: string;
  altText: string;
  wrapperClassName?: string;
  imgClassName?: string;
}

export const CustomImage = ({
  imgSrc,
  altText,
  wrapperClassName,
  imgClassName,
}: ImageInterface) => {
  const passedWrapperClass = wrapperClassName ? wrapperClassName : "";

  const passedImgClass = imgClassName ? imgClassName : "";

  return (
    <div
      className={classNames(styles.customImageWrapper, {
        [passedWrapperClass]: wrapperClassName,
      })}
    >
      <Image
        className={classNames(styles.customImage, {
          [passedImgClass]: imgClassName,
        })}
        src={imgSrc}
        alt={altText}
        height={1}
        width={1}
        unoptimized={true}
      />
    </div>
  );
};
