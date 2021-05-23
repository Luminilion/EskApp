import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonCardContent,
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Enigma.css';
import enigmas_data from "../res/enigmas.json";
import logo from '../img/logo.png';
import {nb_rounds } from '../res/constants';


const Enigma: React.FC = () => {

  const history = useHistory();

  // Declare parameters for enigmas picking
  const nb_enigmas = 5;
  // Pick a list of random enigmas from `enigmas` object
  let enigmas_list = enigmas_data.sort(() => 0.5 - Math.random()).slice(0, nb_enigmas)

  // Load the enigmas
  enigmas_list = enigmas_data

  function startRound() {
    history.replace({
      pathname: '/indications',
      team: 1,
      roundsLeft:nb_rounds
    })
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <h1 className="title">La partie est créée !</h1>
        <p>Passez le téléphone à la première équipe.</p>
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
