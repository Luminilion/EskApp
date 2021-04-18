import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Buzzer.css';

const Buzzer: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Buzzer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>
      </IonContent>
      
    </IonPage>
  );
};

export default Buzzer;
