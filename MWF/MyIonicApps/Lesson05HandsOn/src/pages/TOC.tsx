import { IonIcon, IonList, IonItem, IonLabel, IonFooter, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {chevronForwardOutline} from "ionicons/icons";
// import ExploreContainer from "../components/ExploreContainer";

const TOC : React.FC = () => (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Table of Contents</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cover</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            <IonItem routerLink = "/" routerDirection='back'>
                <IonLabel>Cover</IonLabel>
            </IonItem>
            
            <IonItem routerLink = "/chapter/1" routerDirection='forward'>
                <IonLabel>Chapter 1</IonLabel>
            </IonItem>
            
            <IonItem routerLink = "/chapter/2" routerDirection='forward'>
                <IonLabel>Chapter 2</IonLabel>
            </IonItem>
            
            <IonItem routerLink = "/chapter/3" routerDirection='forward'>
                <IonLabel>Chapter 3</IonLabel>
            </IonItem>
        </IonList>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButton routerDirection='forward' routerLink='/chapter/1' expand='full'>
            <IonIcon icon={chevronForwardOutline} />
          </IonButton>    
        </IonToolbar>
      </IonFooter>
    </IonPage>
)

export default TOC ;