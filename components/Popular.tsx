import React from "react";

type PopularProps = {
  sportlists: any[]; // Remplacez any par le type approprié pour vos données sportlists
};

const Popular: React.FC<PopularProps> = ({ sportlists }) => {
  return (
    <section className="container mx-auto p-5">
      <div className="flex justify-between items-center">
        <span className="w-1/2 md:font-bold md:text-2xl font-semibold">Popular Events</span>
        <div className="flex relative justify-end w-1/2">
          {/* Utilisation de la liste sportlists pour remplir le sélecteur déroulant */}
          <select name="" id="" className="w-full md:w-[40%] p-2 h-9 bg-white border-[1px] rounded-md">
            {/* Ajoutez une option par élément de la liste sportlists */}
            {sportlists.map((sport, index) => (
              <option className="text-black" key={index} value={sport.name}>
                {sport.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default Popular;
