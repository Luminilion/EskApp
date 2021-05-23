import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { star } from 'ionicons/icons'
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";
import logo from '../../img/logo.png';
import chrono_1_min from '../../img/chrono_1_min.jpg'
import {useHistory, useLocation} from 'react-router';

const Indications: React.FC = () => {

  /*
        <div className = "chrono_element">
            <img src={chrono_1_min} alt="chrono" height="70" width="70" />
       </div>

        <h1 className ="equipe">Première équipe</h1>
  */

  const history = useHistory();
  const location = useLocation();

  function nextIndic() {
    let nextTeam = +location.team+1;
    if (nextTeam <=2 ) {
      history.replace({
        pathname: '/indications',
        team: nextTeam,
        roundsLeft: location.roundsLeft
      })
    } else {
      history.replace({
        pathname : '/buzzer',
        roundsLeft: location.roundsLeft
      })
    }
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-text-center" >
        <br />
        <br />
        Equipe {location.team}
        <br />
        Ouvrez votre enveloppe
        <p>Vous avez une minute pour mettre  <br />
        en place les éléments de l'énigme</p>
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
        <IonButton shape="round" color="primary" onClick={nextIndic}>Fini !</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Indications;
