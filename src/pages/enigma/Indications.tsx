import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import {star} from 'ionicons/icons'
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";
import logo from '../../img/logo.png';
import chrono_1_min from '../../img/chrono_1_min.jpg'

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
          <IonTitle  class="ion-text-center">Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <h1 className ="equipe">Première équipe</h1>

        Ici apparaissent les indications de chaque énigme
        <ul>{display_enigmas}</ul>
        



      <div className = "chrono_element">
            <img src={chrono_1_min} alt="chrono" height="70" width="70" />
       </div>
       <p className ="gauche">Vous avez une minute pour mettre  <br></br>en place les éléments de l'énigme</p>
      </IonContent>
      <IonContent>

      <IonButton shape="round" expand="full" color="primary">Suivant</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Indications;
