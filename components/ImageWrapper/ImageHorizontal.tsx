import Image from "next/image";
import styles from "./ImageHorizontal.module.scss";
import classNames from "classnames";
interface ImageInterface {
  imgSrc: string;
  altText: string;
  wrapperClassName?: string;
  imgClassName?: string;
}

export const ImageHorizontal = ({
  imgSrc,
  altText,
  wrapperClassName,
  imgClassName,
}: ImageInterface) => {
  const passedWrapperClass = wrapperClassName ? wrapperClassName : "";

  const passedImgClass = imgClassName ? imgClassName : "";

  return (
    <div
      className={classNames(styles.HorizontalImageWrapper, {
        [passedWrapperClass]: wrapperClassName,
      })}
    >
      <Image
        className={classNames(styles.imgHorizontal, {
          [passedImgClass]: imgClassName,
        })}
        src={imgSrc}
        alt={altText}
        height={100}
        width={1}
        unoptimized={true}
      />
    </div>
  );
};
