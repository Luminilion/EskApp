import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonCardContent,
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Enigma.css';
import logo from '../img/logo.png';
import {nb_rounds } from '../res/constants';


const Enigma: React.FC = () => {

  const history = useHistory();

  function startRound() {
    history.replace({
      pathname: '/indications',
      team: 1,
      roundsLeft:nb_rounds,
      score1: 0,
      score2: 0
    })
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="100" />
          <IonTitle class="ion-text-center">Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <h1 className="title">La partie est créée !</h1>
        <p>Passez le téléphone à l'équipe Rouge.</p>
        <br />
        <br />
        <IonContent class="ion-text-center" >
          <IonCardContent >
            <IonButton onClick={startRound}>Commencer</IonButton>
          </IonCardContent>
        </IonContent>
      </IonContent>

    </IonPage>
  );
};

export default Enigma;
