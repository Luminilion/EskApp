import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonPage
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import logo from '../img/logo.png';


const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent class="ion-text-center">
        <IonCard>
          <IonTitle color="primary" >
            EsKApp

		  </IonTitle>

          <br />

          <IonTitle color="secondary" >

            L'application officielle du
			   <IonRow > </IonRow>
            jeu EsKit


		  </IonTitle>
          <br />
          <br />
          <img src={logo} height="70" width="150" />
          <IonCardHeader>
            <br />
            <IonCardTitle >
              A quoi voulez-vous jouer ?
              </IonCardTitle>
          </IonCardHeader>
          <br />
          <IonCardContent >
            <IonButton class="round" color="secondary">Une partie (enveloppe)</IonButton>
          </IonCardContent>
          <IonCardContent >
            <IonButton class="round"  color="tertiary"  routerLink="/enigma" >Une nouvelle partie  </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
