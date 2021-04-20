import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Enigma.css';

import enigmas from "../res/enigmas.json";

const Enigma: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <ul>{enigmas.map(id => (
          <li>
            Il vous faut cacher les éléments suivants : <ol>
              {id.cacher.map(e => (<li>{e}</li>))}
            </ol>
            Indications : <ol>
              {id.indications.map(i => (<li>{i}</li>))}
            </ol>
            <br />
          </li>
        ))}</ul>

      </IonContent>

    </IonPage>
  );
};

export default Enigma;
