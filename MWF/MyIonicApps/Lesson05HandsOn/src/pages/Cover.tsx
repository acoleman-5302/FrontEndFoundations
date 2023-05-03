import { IonFooter, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import ExploreContainer from "../components/ExploreContainer";

const Cover : React.FC = () => (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cover</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cover</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>My Book </h1>
        <img src ="https://picsum.photos/200/300" />
        <h2>Me</h2>

      </IonContent>

      <IonFooter>
        <IonToolbar>
            <IonButton expand='block' routerLink='/toc'>Start Reading</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
)

export default Cover ;