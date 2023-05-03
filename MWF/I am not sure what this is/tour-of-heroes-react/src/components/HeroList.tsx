// HeroList.tsx
import { IonList, IonItem, IonListHeader } from '@ionic/react';
import React from 'react';

interface Hero {
  id: number;
  name: string;
}

interface HeroListProps {
  heroes: Hero[];
  onSelectHero: (hero: Hero) => void;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, onSelectHero }) => {
  return (
    <IonList>
      <IonListHeader>Heroes</IonListHeader>
      {heroes.map(hero => (
        <IonItem key={hero.id} button onClick={() => onSelectHero(hero)}>
          <div>{hero.name}</div>
        </IonItem>
      ))}
    </IonList>
  );
}

export default HeroList;