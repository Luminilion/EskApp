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
import { useHistory } from "react-router";

const Home: React.FC = () => {

  const history = useHistory();

  function startGame() {
    history.push({
      pathname: '/numberOfPlayers',
      team: '1'
    })
  }

  return (
    <IonPage>

      <IonContent class="ion-text-center">
        <IonCard>

          <IonTitle color="primary" >
            EsKApp
            <br />
            L'application officielle du <br /> jeu EsKit
            <br />
            <br />
            <img src={logo} height="70" width="150" />
          </IonTitle>

          <br />
          <br />

          <IonCardTitle >
            A quoi voulez-vous jouer ?
          </IonCardTitle>

          <br />
          <br />

          <IonCardContent >
            <IonButton expand="block" color="tertiary" onClick={startGame}>Démarrer</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
