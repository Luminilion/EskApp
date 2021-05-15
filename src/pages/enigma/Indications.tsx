import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import {star} from 'ionicons/icons'
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";
import logo from '../../img/logo.png';
import chrono_1_min from '../../img/chrono_1_min.jpg'

const Indications: React.FC = () => {

  /*
        <div className = "chrono_element">
            <img src={chrono_1_min} alt="chrono" height="70" width="70" />
       </div>

        <h1 className ="equipe">Première équipe</h1>
  */

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

      <IonContent class="ion-text-center" >

       <br />
       <br />
       <br />

        Ouvrez votre enveloppe 
        <ul>{display_enigmas}</ul>
        




       <p >Vous avez une minute pour mettre  <br></br>en place les éléments de l'énigme</p>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />

      </IonContent>
      <IonContent class="ion-text-center">
      <br />
      <br />
      <br />

      <IonButton shape="round"  color="primary" routerLink="/indications">equipe suivante </IonButton>
      </IonContent>

      <IonContent class="ion-text-center">

      <IonButton shape="round"  color="success" routerLink="/buzzer">On commence l'enigme! </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Indications;
