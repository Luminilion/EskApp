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
import {useState} from 'react';

const Buzzer: React.FC = () => {

  const hoursMinSecs = { hours: 0, minutes: 10, seconds: 0 }
  const [reussite1, setRe1] = useState<boolean>(false);
  const [reussite2, setRe2] = useState<boolean>(false);

  return (
    <IonPage>

      <IonHeader  >
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center"> Buzzer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div class="ion-text-center" >
        <p>Si vous pensez avoir la rèponse  appuyer sur votre buzzer:</p>
      </div>

      <IonContent color="secondary" >
        <IonButton class="roundBuzzer" size="large" shape="round" color="tertiary" routerLink="/reponse_1">Team 1</IonButton>
      </IonContent>

      <div class="ion-text-center">
        <IonButton color="tertiary" > <CountDownTimer hoursMinSecs={hoursMinSecs} />  </IonButton>
      </div>

      <IonContent color="warning">
        <IonButton class="roundBuzzer" size="large" shape="round" color="tertiary" routerLink="/reponse_2">Team 2</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Buzzer;
