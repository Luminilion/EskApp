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
import logo from '../../img/logo.png';


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
        Press your team button if you found the solution
       	  </IonToolbar>


      <IonContent  color="secondary"  >
 

        <IonCardContent >
          <IonButton class="roundBuzzer"size="large" shape="round" color="tertiary" >Team 1</IonButton>
        </IonCardContent>

      </IonContent>

      <IonToolbar class="ion-text-center">
        <IonButton color="tertiary" > Timer </IonButton>
      </IonToolbar>

      <IonContent  color="warning">

        <IonCardContent >
          <IonButton class="roundBuzzer" size="large" shape="round" color="tertiary"   > Team 2  </IonButton>
        </IonCardContent>
      </IonContent>

    </IonApp>
  );
};

export default Buzzer;
