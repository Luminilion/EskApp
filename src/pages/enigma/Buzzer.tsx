import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonApp,
  IonCardContent,
  IonButton
} from '@ionic/react';
import './Buzzer.css';
import CountDownTimer from './CountDownTimer';
import logo from '../../img/logo.png';

const hoursMinSecs = {hours:0, minutes: 10, seconds: 0}

const Buzzer: React.FC = () => {
  return (
    <IonApp>

      <IonHeader  >
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center"> Buzzer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonToolbar class="ion-text-center" >
       <p>Si vous pensez avoir la rèponse  appuyer sur votre buzzer:</p> 
      </IonToolbar>


      <IonContent  color="secondary"  >
 

        <IonCardContent >
          <IonButton class="roundBuzzer"size="large" shape="round" color="tertiary" routerLink="/reponse_1">Team 1</IonButton>
        </IonCardContent>

      </IonContent>

      <IonToolbar class="ion-text-center">
        <IonButton color="tertiary" > <CountDownTimer hoursMinSecs={hoursMinSecs}/>  </IonButton>
        
      </IonToolbar>

      <IonContent  color="warning">

        
      <IonCardContent >
          <IonButton class="roundBuzzer"size="large" shape="round" color="tertiary" routerLink="/reponse_2">Team 2</IonButton>
        </IonCardContent>


      </IonContent>

    </IonApp>
  );
};

export default Buzzer;
