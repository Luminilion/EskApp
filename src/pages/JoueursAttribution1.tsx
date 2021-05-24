import {
  IonContent,
  IonHeader,
  IonPage,
  IonCardContent,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton
} from '@ionic/react';
import './JoueursAttribution1.css';
import logo from '../img/logo.png';
import { useHistory, useLocation } from "react-router";
import {equipe1, equipe2} from '../res/joueurs';

const JoueursAttribution1: React.FC = () => {

  const location = useLocation();
  const history = useHistory();

  const teamName = ["Rouge" , "Bleu"]

  const nbPlayers = location.nbPlayers ? location.nbPlayers : 5;

  // load players names
  let equipe = [];
  if (location.team === 1) {
    equipe = equipe1;
  } else {
    equipe = equipe2;
  }
  // shuffle players names
  equipe = equipe.sort(() => 0.5 - Math.random());
  // select only matching number of names
  equipe = equipe.slice(0, nbPlayers);

  // function handling next page
  function nextConfig() {
    let nextTeam = +location.team+1;
    if (nextTeam<3) {
      history.replace({
        pathname: '/numberOfPlayers',
        team: nextTeam,
      })
    } else {
      history.replace({
        pathname: '/enigma',

      })
    }
  }

  return (
    <IonPage >

      <IonHeader>
        <IonToolbar>
          <div>
            <img src={logo} height="50" width="100" />
            <IonTitle class="ion-text-center" >Equipe { teamName[location.team -1]}</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-text-center">
        <p>Votre groupe sera constitué des joueurs suivants.</p>
        <p>Choisissez votre personnage!</p>
      </IonContent>
      <IonGrid class="paddingGrid" >
        <IonRow >
          {equipe[0] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[0]}</IonButton >
          </IonCol>}
          {equipe[1] && <IonCol>
            <IonButton class="roundName" icon-only>{equipe[1]}</IonButton >
          </IonCol>}
          {equipe[2] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[2]}</IonButton >
          </IonCol>}
        </IonRow>
        <IonRow>
          {equipe[3] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[3]}</IonButton >
          </IonCol>}
          {equipe[4] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[4]}</IonButton >
          </IonCol>}
          {equipe[5] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[5]}</IonButton >
          </IonCol>}
        </IonRow>
        <IonRow>
          {equipe[6] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[6]} </IonButton >
          </IonCol>}
          {equipe[7] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[7]} </IonButton >
          </IonCol>}
          {equipe[8] && <IonCol >
            <IonButton class="roundName" icon-only>{equipe[8]} </IonButton >
          </IonCol>}
        </IonRow>
      </IonGrid>

      <IonCardContent class="ion-text-center" >
        <IonButton color="success" onClick={nextConfig}> Suivant </IonButton >
      </IonCardContent>
    </IonPage>
  );
};

export default JoueursAttribution1;
