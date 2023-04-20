interface TextGroupSmallInterface {
  label: string;
  text: string;
}

export const TextGroupSmall = ({ label, text }: TextGroupSmallInterface) => {
  return (
    <div>
      <div className="label">{label}</div>
      <div className="text">{text}</div>
    </div>
  );
};
