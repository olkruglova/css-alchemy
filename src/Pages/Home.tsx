import { Link } from "react-router-dom";
import Card from "../Card";

function Home() {
  return (
    <div className="flex flex-row h-full w-4/5 pt-16 pb-8 px-12 m-auto overflow-hidden">
      <div className="relative flex flex-col w-full">
        <div className="flex flex-row gap-6 h-2/4 mb-12">
          <div className="w-1/3 ">
            <Card
              borderColor="border-green"
              hoverBorderColor="border-green-light"
              bgImg="bg-shadows-bg"
              text="Shadows"
              url="/shadows"
            />
          </div>
          <div className="w-1/3 ">
            <Card
              borderColor="border-ligth"
              hoverBorderColor="border-white"
              bgImg="bg-text-bg"
              text="Text"
              url="/text"
            />
          </div>
          <div className="w-1/3 ">
            <Card
              borderColor="border-orange"
              hoverBorderColor="border-orange-light"
              bgImg="bg-animation-bg"
              text="Animations"
              url="/animations"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 h-1/5">
          <div className=" w-3/6 m-auto h-full">
            <Card
              borderColor="border-green"
              hoverBorderColor="border-green-light"
              bgImg="bg-articles-bg"
              text="Articles"
              url="/articles"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-50% flex flex-col w-full">
          <Link to="/about">
            <div className="border-transparent bg-logo-bg bg-contain bg-no-repeat bg-center w-36 h-20 opacity-30 mx-auto hover:opacity-75"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
