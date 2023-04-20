interface BackgroundTextInterface {
  text: string;
  additionalClass?: string;
  variant: "big" | "medium" | "small";
}
export const BackgroundText = ({
  text,
  additionalClass,
  variant,
}: BackgroundTextInterface) => {
  const classNames = "background-text " + variant + " " + additionalClass;

  return <div className={classNames}>{text}</div>;
};
