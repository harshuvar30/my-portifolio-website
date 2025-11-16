
type HeadingProps = {
  title: string;
};
function Heading({ title }: HeadingProps) {
  return (
    <div className="flex justify-center items-center">
      <h3 className="text-3xl font-bold">{title}</h3>
    </div>
  );
}
export default Heading;