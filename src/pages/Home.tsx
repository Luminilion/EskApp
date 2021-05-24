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
      team: 1
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
            <img src={logo} height="80" width="120" />
          </IonTitle>

          <br />
          <br />
          <br/>
      <br/>
      <br/>
  
          <IonCardTitle >
            Bienvenu, préparez vous a une belle partie d'escape game 
          </IonCardTitle>

          <br />
          <br />
          <br/>
      <br/>
      <br/>

          <IonCardContent >
          <div class="ion-text-center">
            <IonButton class="roundBuzzer" shape="round" expand="block" color="tertiary" onClick={startGame}>Démarrer</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
