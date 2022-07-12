import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET_SPELL_DETAILS } from "../services/dnd5eAPI";
import { ISpellDetails } from "../interface/spellsInterface";

import SpellBg from "../assets/spellBg.jpg";
import DetailsSection from "../components/Common/DetailsSection";
import ClassIcons from "../data/ClassIcons";
import Loader from "../components/Common/Loader";

const DetailView: FC = () => {
  const { spellId } = useParams();
  const [spellData, setSpellData] = useState<ISpellDetails>(
    null as unknown as ISpellDetails
  );

  const getSpellData = async (id: string) => {
    const reply = await GET_SPELL_DETAILS(id);
    setSpellData(reply);
  };

  useEffect(() => {
    if (spellId) {
      getSpellData(spellId);
    }
  }, [spellId]);

  if (spellData === null) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${SpellBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="h-max overflow-y-scroll scrollbar-hide my-3 p-4 flex flex-col items-center justify-center w-full">
        <h1 className="text-red-800 uppercase font-bold text-center text-3xl font-cinzel">
          {spellData.name}
        </h1>
        <div className="mt-4 lg:mt-14 w-max flex flex-col items-start justify-center font-cardo p-2">
          <DetailsSection title="Range" value={spellData.range} />
          <DetailsSection title="Casting Time" value={spellData.casting_time} />
          <DetailsSection
            title="Components"
            value={spellData.components.toString()}
          />
          <DetailsSection title="Duration" value={spellData.duration} />
          <DetailsSection title="Material" value={spellData.material} />
          <div className="w-full grid grid-cols-3 mb-2">
            <label className="font-bold col-span-1">Used by:</label>
            <div className="col-span-2 flex items-center justify-start">
              {spellData.classes.map((cls) => (
                <div key={cls.index} className="mr-2">
                  <img
                    src={ClassIcons[cls.index].image}
                    alt={cls.name}
                    className="w-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-[40rem] font-cardo p-2">
          <p>{spellData.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
