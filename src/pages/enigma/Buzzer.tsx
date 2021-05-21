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
    <>
      <IonContent>
        <br />
        <br />
        <br />
        <br />
        <IonCardContent >
          <IonButton expand="block" size="large" shape="round" color="tertiary" >Team 1</IonButton>
        </IonCardContent>

      
        <br />
        <br />
        <br />
        <br />
        <IonCardContent >
          <IonButton expand="block" size="large" shape="round" color="tertiary"   > Team 2  </IonButton>
        </IonCardContent>
      </IonContent>
    </>
  );
};

export default Buzzer;
