// HomePage.tsx
import React, { useState } from "react";
import HeroList from "../components/HeroList";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader } from "@ionic/react";

interface Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 1, name: "Windstorm" },
  { id: 2, name: "Tornado" },
  { id: 3, name: "Cyclone" },
  // ... more heroes
];

const HomePage: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState(HEROES[0]);

  const updateHeroName = (name: string) => {
    setSelectedHero((prevHero) => ({ ...prevHero, name }));
    HEROES.forEach((hero, index) => {
      if (hero.id === selectedHero.id) {
        HEROES[index] = { ...selectedHero, name };
      }
    });
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{selectedHero.name} Details</IonCardTitle>
          <IonCardSubtitle>
            <label>id: </label>
            {selectedHero.id}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <label>name: </label>
          <input value={selectedHero.name} 
            onChange={(e) => updateHeroName(e.target.value)} 
            placeholder="name" 
          />
        </IonCardContent>
      </IonCard>
      <HeroList heroes={HEROES} onSelectHero={setSelectedHero} />
    </>
  );
};

export default HomePage;