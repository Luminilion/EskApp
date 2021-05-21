import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonModal
} from '@ionic/react';
import Indications from './enigma/Indications';
import Buzzer from "./enigma/Buzzer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Enigma.css';
import enigmas_data from "../res/enigmas.json";

const Enigma: React.FC = () => {

  // Pick total number of enigmas (multiple of 2)
  const nb_enigmas = 6;
  if (nb_enigmas%2 != 0) {
    throw "Number of chosen enigmas is not a 2-multiple."
  }
  // Pick a list of random enigmas from `enigmas` object
  let enigmas_list = enigmas_data.sort(() => 0.5 - Math.random()).slice(0, nb_enigmas);

  // Generate display vars for all enigmas
  // Enigma 1
  const [showIndicationsA, setShowIndicationsA] = useState(true);
  const [showIndicationsB, setShowIndicationsB] = useState(false);
  const [showBuzzer, setShowBuzzer] = useState(false);

  // Enigma 2
  const [showIndicationsA2, setShowIndicationsA2] = useState(false);
  const [showIndicationsB2, setShowIndicationsB2] = useState(false);
  const [showBuzzer2, setShowBuzzer2] = useState(false);

  // Enigma 3
  const [showIndicationsA3, setShowIndicationsA3] = useState(false);
  const [showIndicationsB3, setShowIndicationsB3] = useState(false);
  const [showBuzzer3, setShowBuzzer3] = useState(false);

  // Generate indices arrays
  const results = new Array(nb_enigmas)
  // Generate return functions
  // Enigma 3 ------------------------------------------------------
  // called when buzzer is timeout
  function closeBuzzer3() {
    setShowBuzzer3(false);
  }
  // called when indications 2 is done - opens Buzzer
  function closeIndicationsB3() {
    setShowIndicationsB3(false);
    setShowBuzzer3(true);
    setTimeout(closeBuzzer3, 1*10*1000); // 600'000 ms = 10 min
  }
  // called when indications 1 is done - opens indications 2
  function closeIndicationsA3() {
    setShowIndicationsA3(false);
    setShowIndicationsB3(true);
    setTimeout(closeIndicationsB3, 1*10*1000); // 60'000 ms = 1 min
  }
  // Enigma 2 ------------------------------------------------------
  // called when buzzer is timeout
  function closeBuzzer2() {
    setShowBuzzer2(false);
    setShowIndicationsA3(true);
    setTimeout(closeIndicationsA3, 1*10*1000); // 60'000 ms = 1 min
  }
  // called when indications 2 is done - opens Buzzer
  function closeIndicationsB2() {
    setShowIndicationsB2(false);
    setShowBuzzer2(true);
    setTimeout(closeBuzzer2, 1*10*1000); // 600'000 ms = 10 min
  }
  // called when indications 1 is done - opens indications 2
  function closeIndicationsA2() {
    setShowIndicationsA2(false);
    setShowIndicationsB2(true);
    setTimeout(closeIndicationsB2, 1*10*1000); // 60'000 ms = 1 min
  }
  // Enigma 1 ------------------------------------------------------
  // called when buzzer is timeout
  function closeBuzzer() {
    setShowBuzzer(false);
    setShowIndicationsA2(true);
    setTimeout(closeIndicationsA2, 1*10*1000); // 60'000 ms = 1 min
  }
  // called when indications 2 is done - opens Buzzer
  function closeIndicationsB() {
    setShowIndicationsB(false);
    setShowBuzzer(true);
    setTimeout(closeBuzzer, 1*10*1000); // 600'000 ms = 10 min
  }
  // called when indications 1 is done - opens indications 2
  function closeIndicationsA() {
    setShowIndicationsA(false);
    setShowIndicationsB(true);
    setTimeout(closeIndicationsB, 1*10*1000); // 60'000 ms = 1 min
  }
  
  setTimeout(closeIndicationsA, 1*10*1000) // 60'000 ms = 1 min

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading...</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {
          showIndicationsA &&
          <Indications
            enigma1={enigmas_list[0]}
            enigma2={enigmas_list[1]}
            closeAction={() => {}}
          />
        }

        {
          showIndicationsB &&
          <Indications
            enigma1={enigmas_list[1]}
            enigma2={enigmas_list[3]}
            closeAction={() => {}}
          />
        }

        {
          showBuzzer &&
          <Buzzer

          />
        }

        {
          showIndicationsA2 &&
          <Indications
            enigma1={enigmas_list[2]}
            enigma2={enigmas_list[1]}
            closeAction={() => {}}
          />
        }

        {
          showIndicationsB2 &&
          <Indications
            enigma1={enigmas_list[3]}
            enigma2={enigmas_list[1]}
            closeAction={() => {}}
          />
        }

        {
          showBuzzer2 &&
          <Buzzer

          />
        }

        {
          showIndicationsA3 &&
          <Indications
            enigma1={enigmas_list[4]}
            enigma2={enigmas_list[1]}
            closeAction={() => {}}
          />
        }

        {
          showIndicationsB3 &&
          <Indications
            enigma1={enigmas_list[5]}
            enigma2={enigmas_list[1]}
            closeAction={() => {}}
          />
        }

        {
          showBuzzer3 &&
          <Buzzer

          />
        }

      </IonContent>

    </IonPage>
  );
};

export default Enigma;
