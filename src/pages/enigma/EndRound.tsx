import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonButton } from '@ionic/react';
import '../Endgame.css';
import logo from '../../img/logo.png';
import {useHistory, useLocation} from 'react-router';

const EndRound: React.FC = () => {

  const history = useHistory();
  const location = useLocation();

  let results = ["Personne !"];
  if (location.results) {
    results = location.results;
  }

  return (
    <IonPage>

      <IonHeader>
        <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Fin de l'énigme</IonTitle>
      </IonHeader>

      <IonContent color="warning">  {/*   Secondary color for the bleu team */}
        <br />
        <br />
        <br />
        <br />
        <div className="hello" >Les gagnants:<br/><br />   {/*logic pour équipe bleu */}
        {results.map(r => <>{r}<br/></>)}
        <br/> Bravo à tous ! </div>
      </IonContent>

      <IonContent class="ion-text-center">  {/*   Secondary color for the bleu team */}

        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="warning" routerLink="/indications">Prochaine énigme</IonButton>
        </IonCardContent>

        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="secondary" routerLink="/home">Retour au Menu</IonButton>
        </IonCardContent>

      </IonContent>

    </IonPage>
  );
};

export default EndRound;
