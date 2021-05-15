import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonButton } from '@ionic/react';
import './JoueursConfig.css';
import logo from '../img/logo.png';

const JoueursConfig: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
        <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
      <IonContent class="ion-text-center"  >
        <br />
        <br />
        Repartissez vous en 2 groupes et indiquez le nombre de joueurs total.
			  <br />
        <br />
        <br />
        <input
          type="text"

          placeholder="0"
          name="nombre"

        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <IonButton class="roundJoueur"  shape="round" color="tertiary" routerLink="/JoueursAttribution1">Generer le jeu</IonButton>

      </IonContent>

  
     

      </IonContent>
    </IonPage>
  );
};

export default JoueursConfig;
