import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonModal
} from '@ionic/react';
import Indications from './enigma/Indications';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Enigma.css';
import enigmas_data from "../res/enigmas.json";

const Enigma: React.FC = () => {

  // Declare parameters for enigmas picking
  const nb_enigmas = 5;
  // Pick a list of random enigmas from `enigmas` object
  let enigmas_list = enigmas_data.sort(() => 0.5 - Math.random()).slice(0, nb_enigmas);

  const [showIndications, setShowIndications] = useState(false);
  const [showIndications2, setShowIndications2] = useState(false);

  let etat = "créée";
  function getEtat() {
    return etat;
  }

  async function closeIndications(newEtat:boolean) {
    await setShowIndications(false);
    await setShowIndications2(newEtat);
  }
  async function closeIndications2(newEtat:boolean) {
    await setShowIndications2(false);
  }

  let history = useHistory();

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading...</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <h1>La partie est {getEtat()} !</h1>

        <p>Passez le téléphone à la première équipe.</p>
        <IonButton onClick={() => {setShowIndications(true)}}>Commencer</IonButton>

        <IonButton onClick={e => {
          e.preventDefault();
          //history.push("/buzzer");
        }}>Next</IonButton>

        {
          showIndications &&
          <Indications
            enigma1={enigmas_list[0]}
            enigma2={enigmas_list[1]}
            closeAction={closeIndications}
          />
        }

        {
          showIndications2 &&
          <Indications
            enigma1={enigmas_list[2]}
            enigma2={enigmas_list[3]}
            closeAction={closeIndications2}
          />
        }

        {
          false &&
          <IonModal isOpen={showIndications}>
            <Indications
              enigma1={enigmas_list[0]}
              enigma2={enigmas_list[1]}
              closeAction={closeIndications}
            />
          </IonModal>
        }

      </IonContent>

    </IonPage>
  );
};

export default Enigma;
