import type { CSSProperties } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";

type HeadingProps = {
  title: string;
};
function Heading({ title }: HeadingProps) {
  const {ref, isVisible} = useInViewOnce()
  return (
    <div ref={ref} className={`flex justify-center items-center fade-in-section ${isVisible ? 'is-visible':''}`}
     style={{"--offset":"10vh"} as CSSProperties}
    >
      <h3 className="text-3xl font-bold">{title}</h3>
    </div>
  );
}
export default Heading;