import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Enigma.css';

import enigmas from "../res/enigmas.json";

const Enigma: React.FC = () => {

  // Declare parameters for enigmas picking
  const nb_enigmas = 5;

  // Pick a list of random enigmas from `enigmas` object
  let enigmas_list = enigmas.sort(() => 0.5 - Math.random()).slice(0, nb_enigmas)

  // Preparing display of chosen enigmas
  const display_enigmas = enigmas_list.map(id => (
    <li>
      Il vous faut cacher les éléments suivants : <ol>
        {id.cacher.map(e => (<li>{e}</li>))}
      </ol>
      Indications : <ol>
        {id.indications.map(i => (<li>{i}</li>))}
      </ol>
      <br />
    </li>
  ));

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <ul>{display_enigmas}</ul>

      </IonContent>

    </IonPage>
  );
};

export default Enigma;
