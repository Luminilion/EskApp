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
  IonPage,
  IonInput,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './JoueursConfig.css';
import logo from '../img/logo.png';
import { useHistory, useLocation } from "react-router";
import { useState } from 'react';

const NumberOfPlayers: React.FC = () => {

  const history = useHistory();
  const location = useLocation();
  const [nbPlayers, setNbPlayers] = useState<int>(1);

  function addPlayer() {
    if (nbPlayers < 9) {
      setNbPlayers(nbPlayers + 1)
    }
  }

  function removePlayer() {
    if (nbPlayers > 1) {
      setNbPlayers(nbPlayers - 1)
    }
  }

  function nextConfig() {
    history.replace({
      pathname: '/joueursAttribution1',
      nbPlayers: nbPlayers,
      team: location.team,
    })
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-text-center">
        <IonTitle>Group {location.team}</IonTitle>
        <p>Set the number of players on your team:</p>
        <IonInput value={nbPlayers} readonly></IonInput>
        <IonButton onClick={addPlayer}>+</IonButton>
        <IonButton onClick={removePlayer}>-</IonButton>
        <br/>
        <IonButton class="roundJoueur"  shape="round" color="tertiary" onClick={nextConfig}>Next</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NumberOfPlayers;
