import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton
} from '@ionic/react';
import { useState } from 'react';
import { useEnigmaState } from "../hooks/EnigmaType";

import './Enigma.css';
import enigmas_data from "../res/enigmas.json";

const Enigma: React.FC = () => {

  // Declare parameters for enigmas picking
  const nb_enigmas = 5;
  // Pick a list of random enigmas from `enigmas` object
  let enigmas_list = enigmas_data.sort(() => 0.5 - Math.random()).slice(0, nb_enigmas)

  const { enigmas, setList } = useEnigmaState();

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <h1>La partie est créée !</h1>

        <p>Passez le téléphone à la première équipe.</p>
        <IonButton routerLink="/indications" onClick={() => setList(enigmas_list)}>Commencer</IonButton>

      </IonContent>

    </IonPage>
  );
};

export default Enigma;
