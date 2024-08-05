import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  borderColor: string;
  hoverBorderColor: string;
  bgImg: string;
  text: string;
  url: string;
}

const Card: React.FC<CardProps> = ({
  borderColor,
  hoverBorderColor,
  bgImg,
  text,
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={url}>
      <div
        className={`relative rounded-md border-4 h-full w-full ${borderColor} hover:${hoverBorderColor} ${bgImg} bg-cover bg-center hover:drop-shadow-white`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="animate-[appearance_0.5s_ease-in-out] absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-black from-10% to-transparent to-95% bg-opacity-85  cursor-pointer ">
            <span className="text-white font-thin text-3xl text-header">
              {text.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
