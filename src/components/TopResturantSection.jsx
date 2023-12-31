import Card from "./Card";
import { topResturants } from "../data/restroData";

const TopResturantSection = () => {
  return (
    <div className="m-6 px-12">
      <div className="flex items-center">
        <div className="w-1/12 h-5 bg-teal-600 transform rotate-90"></div>
        <div className="w-4/12 text-4xl font-bold">
          Some top resturant for dining out or in!
        </div>
        <div className="text-left w-7/12 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
          ad, autem libero, alias saepe quidem obcaecati minus facere officia
          incidunt reiciendis. At accusamus dolore error debitis quis impedit
          provident.
        </div>
      </div>
      <div className="flex justify-start my-8">
        <div className="relative flex items-center">
          {topResturants.map((restro) => (
            <Card {...restro} />
          ))}
          <img src="/arrow2.svg" className="ml-16" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default TopResturantSection;
