import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";

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
          <IonTitle>Indications</IonTitle>
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
