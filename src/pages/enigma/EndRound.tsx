import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonButton } from '@ionic/react';
import '../Endgame.css';
import logo from '../../img/logo.png';
import {useHistory, useLocation} from 'react-router';
import {nb_rounds } from '../../res/constants';

const EndRound: React.FC = () => {

  const history = useHistory();
  const location = useLocation();

  let results = ["Personne !"];
  if (location.results) {
    results = location.results;
  }

  function nextRound() {
    history.replace({
      pathname: '/indications',
      team: 1,
      roundsLeft:location.roundsLeft
    })
  }

  function backHome() {
    history.replace({
      pathname: '/'
    })
  }

  return (
    <IonPage>

      <IonHeader>
        <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Fin de l'énigme</IonTitle>
      </IonHeader>

      <IonContent color="warning">  {/*   Secondary color for the bleu team */}
        <br />
        <div className="hello" >Fin de la {nb_rounds-location.roundsLeft}e énigme. <br />
        Plus que {location.roundsLeft} énigme(s) restante(s).<br />
        Les gagnants:<br/><br/>   {/*logic pour équipe bleu */}
        {results.map(r => <>{r}<br/></>)}
        <br/> Bravo à tous ! <br /></div>
      </IonContent>

      <IonContent class="ion-text-center">  {/*   Secondary color for the bleu team */}

        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="warning" onClick={nextRound}>Prochaine énigme</IonButton>
        </IonCardContent>

        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="secondary" onClick={backHome}>Retour au Menu</IonButton>
        </IonCardContent>

      </IonContent>

    </IonPage>
  );
};

export default EndRound;
