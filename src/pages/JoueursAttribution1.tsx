import {
  IonContent,
  IonHeader,
  IonPage,
  IonCardContent,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton
} from '@ionic/react';
import './JoueursAttribution1.css';
import logo from '../img/logo.png';

let user_names = ['Tintin', 'Haddock', 'Calculus', 'Alcazar', 'Sonwy', 'Tapioca', 'Wolf', 'Muller']

const JoueursAttribution1: React.FC = () => {
  return (
    <IonPage >

      <IonHeader>
        <IonToolbar>
          <div>
            <img src={logo} height="50" width="150" />
            <IonTitle class="ion-text-center" >Groupe 1</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-text-center">
        <p>Le groupe 1 sera constitué des joueurs suivants.</p>
        <p>SVP suivez l'ordre, prenez que les n <br></br> premiers noms si vous etes n joueurs</p>
        <p>Choisissez votre personnage!</p>
      </IonContent>

      <IonGrid class="paddingGrid" >
        <IonRow >
          <IonCol >
            <IonButton class="roundName" icon-only>  1. {user_names[0]} </IonButton >
          </IonCol>
          <IonCol>
            <IonButton class="roundName" icon-only>  2. {user_names[1]} </IonButton >
          </IonCol>
          <IonCol >
            <IonButton class="roundName" icon-only>  3. {user_names[2]} </IonButton >
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol >
            <IonButton class="roundName" icon-only>  4. {user_names[3]} </IonButton >
          </IonCol>
          <IonCol >
            <IonButton class="roundName" icon-only>  5. {user_names[4]} </IonButton >
          </IonCol>
          <IonCol >
            <IonButton class="roundName" icon-only>  6. {user_names[5]} </IonButton >
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonCardContent class="ion-text-center" >
        <IonButton color="success" routerLink="/JoueursAttribution2"> Groupe suivant </IonButton >
      </IonCardContent>
    </IonPage>
  );
};

export default JoueursAttribution1;
