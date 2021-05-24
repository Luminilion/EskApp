import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonButton } from '@ionic/react';
import './Endgame.css';
import logo from '../img/logo.png';
import {useLocation} from 'react-router';
import {nb_teams } from '../res/constants';

const Endgame: React.FC = () => {

  const location = useLocation();
  //      <div className="hello" >{winnerSentence}</div>   {/*logic pour équipe bleu */}

  // Get winner
  let winner = 0;
  if (location.score1 >= location.score2) {
    winner += 1;
  }
  if (location.score2 >= location.score1) {
    winner += 2;
  }
  // Get winner sentence
  let winnerSentence = "Ce n'est pas clair qui a gagné...";
  switch(winner) {
    case 3:
      winnerSentence = "Egalité ! Les " + nb_teams + " gagnent!";
      break;
    default:
      winnerSentence = "Bravo ! L'équie "+winner+" gange!";
  }


  return (
    <IonPage>

      <IonHeader>
        <img src={logo} height="50" width="100" />
        <IonToolbar >


          <IonTitle class="ion-text-center">Fin de la partie</IonTitle>
        </IonToolbar>
      </IonHeader>




      <IonContent color="warning">  {/*   Secondary color for the bleu team */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
   
        <div className="hello" > Bravo à tous ! </div>
      </IonContent>






      <IonContent class="ion-text-center">  {/*   Secondary color for the bleu team */}
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="secondary" routerLink="/home">Retour au Menu</IonButton>
        </IonCardContent>


      </IonContent>






    </IonPage>
  );
};

export default Endgame;
