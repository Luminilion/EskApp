import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { star } from 'ionicons/icons'
import './Indications.css';
import { useEnigmaState } from "../../hooks/EnigmaType";
import logo from '../../img/logo.png';
import japan from '../../img/japan.png';
import brazil from '../../img/brazil.png';
import egypt from '../../img/egypt.png';
import final from '../../img/final.jpg';
import chrono_1_min from '../../img/chrono_1_min.jpg'
import {useHistory, useLocation} from 'react-router';
import {nb_rounds, nb_teams } from '../../res/constants';

const Indications: React.FC = () => {

  /*
        <div className = "chrono_element">
            <img src={chrono_1_min} alt="chrono" height="70" width="70" />
       </div>

        <h1 className ="equipe">Première équipe</h1>
  */

  const history = useHistory();
  const location = useLocation();

  
  const teamName = ["Rouge" , "Bleu"]
  const flags = [brazil , japan, egypt , final]

  // Defines timer
  const hoursMinSecs= { hours: 0, minutes: 10, seconds: 0 };

  function nextIndic() {
    let nextTeam = +location.team+1;
    if (nextTeam <=2 ) {
      history.replace({
        pathname: '/indications',
        team: nextTeam,
        roundsLeft: location.roundsLeft,
        score1: location.score1,
        score2: location.score2,
      })
    } else {
      history.replace({
        pathname : '/buzzer',
        roundsLeft: location.roundsLeft,
        score1: location.score1,
        score2: location.score2,
      })
    }
  }




  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="100" />
          <IonTitle class="ion-text-center">Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-text-center" >
        <br />
        <br />
        Equipe { teamName[location.team -1]}
        <br />

        Ouvrez votre enveloppe
        <br />
        <br />
        <img src={flags[(nb_rounds-location.roundsLeft)]} height="100" width="150" />
        <br />
        <br />
        <p>Vous avez une minute pour mettre<br />
        en place les éléments de l'énigme</p>
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
