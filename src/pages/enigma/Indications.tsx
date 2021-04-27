import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";
import logo from '../../img/logo.png';

const Indications: React.FC = () => {

  const { enigmas, setList } = useEnigmaState();

  // Preparing display of chosen enigmas
  const display_enigmas = enigmas.map(id => (
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
        <img src={logo} height="50" width="150" />
          <IonTitle  class="ion-text-center">Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>

        <ul>{display_enigmas}</ul>
      </IonContent>

    </IonPage>
  );
};

export default Indications;
