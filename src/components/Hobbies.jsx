import React from "react";
import Card from "./Card";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Musician",
      text: `I play rythm/lead guitarist in the band "Creepy Clowns" and also play electric guitar when needed. Jasfel and I have been collaborating for many years; we write original material together and perform when opportunities arise. Although we haven't released official recordings yet due to limited funds, we’re actively preparing demos and plan to publish our music as soon as possible.`,
      image:
        "https://scontent.fceb9-1.fna.fbcdn.net/v/t39.30808-6/553432257_122096534289040151_4545400960019448690_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEQxUAk-P015jw10o7FoYWjDS3d8OD3YFINLd3w4PdgUrHn1RYkp0DvoyAxyG9npKby2SD63RHeIqp-ZXBgiKVP&_nc_ohc=tKWZcrTpWzUQ7kNvwGONu4c&_nc_oc=AdmLp9wruwqCpHw3fItB8YxL1m7lGdnX2it2DKzutEpTGrRFevDiWSXmfCV38Moe4Cw&_nc_zt=23&_nc_ht=scontent.fceb9-1.fna&_nc_gid=haP43qlxCrh9R57iAdT3Cg&oh=00_Afp8CFGPIde6DCeZrRK9tqEoBzwBMk2YCoTS11tfuxiQRg&oe=696645FC",
    },
    {
      title: "Collection",
      text: "My hobbies include collecting knives, replica firearms, and other interesting items.",
      image:
        "https://dz2cdn1.dzone.com/storage/temp/12808952-model-car-collection.jpeg",
    },
    {
      title: "Video Games",
      text: "I play a video games more likely First Person Shooter games",
      image:
        "https://i.ytimg.com/vi/EA0YC9m6D4s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPEDlv0VGPIr2CC_juaUkgVRDJDQ",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center p-10 mb-5">
      <h2 className=" text-4xl font-bold m-5">Hobbies</h2>
      <div className="flex justify-evenly gap-10 flex-wrap">
        {hobbies.map((hobby, index) => (
          <Card
            key={index}
            title={hobby.title}
            text={hobby.text}
            image={hobby.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
