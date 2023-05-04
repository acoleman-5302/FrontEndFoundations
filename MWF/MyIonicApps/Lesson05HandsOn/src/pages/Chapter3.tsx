import { IonGrid, IonRow, IonCol, IonIcon, IonFooter, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import {chevronForwardOutline, chevronBackOutline, menuOutline} from "ionicons/icons";

const Chapter3: React.FC = () => (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 3</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 3</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonContent className='ion-padding'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aperiam aspernatur aut mollitia inventore? Dolorem, dignissimos. Nisi, odit accusantium perferendis nam quo natus, consequuntur culpa ipsa, quos quisquam assumenda adipisci?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ipsam quidem eius molestias maiores officia blanditiis corrupti voluptatem est laboriosam laborum impedit itaque, dignissimos cum quisquam asperiores cumque nulla quaerat! Architecto doloremque sequi labore dicta a rem corrupti, eum iusto, nisi aspernatur mollitia cum dolores ad modi ex. Eligendi alias recusandae nisi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laboriosam excepturi, voluptatum voluptas vitae soluta recusandae repudiandae aliquid eveniet quis totam voluptatem neque vel sequi, culpa iste vero cupiditate quam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ea quam ab culpa temporibus, rem reiciendis nesciunt sunt rerum fugit soluta quidem quia natus accusamus nulla eos, voluptas at. Perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quam, soluta autem unde sapiente officia, magnam praesentium, aliquid necessitatibus ullam. Magni natus culpa laboriosam similique labore mollitia eveniet corrupti!</p>
        </IonContent>
    </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton routerDirection='back' routerLink='/toc' expand='full'>
                    <IonIcon icon={chevronBackOutline} />
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton routerDirection='back' routerLink='/toc' expand='full'>
                    <IonIcon icon={menuOutline}/>
                  </IonButton>
                </IonCol>

              </IonRow>
            </IonGrid>

            
          </IonToolbar>
          
        </IonFooter>
  
  </IonPage>
  );

export default Chapter3;