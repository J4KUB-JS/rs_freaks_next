interface HeadLineInterface {
  heading: string;
  subHeading: string;
  variant: "section" | "main";
  additionalClass?: string;
}

export const Headline = ({
  heading,
  subHeading,
  variant,
  additionalClass,
}: HeadLineInterface) => {
  const [firstPart, SecondPart] = heading.split(" ");

  return (
    <div className={"headline " + additionalClass}>
      {variant === "main" ? (
        <div className={variant + "-heading"}>
          <span className="firstPartHeading">{firstPart}</span>
          <span className="secondPartHeading">{SecondPart}</span>
        </div>
      ) : (
        <div className={variant + "-heading"}>{heading}</div>
      )}
      <div className={variant + "-subHeading"}>{subHeading}</div>
    </div>
  );
};
