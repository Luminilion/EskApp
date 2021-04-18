import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './BuzzerSolo.css';

const BuzzerSolo: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>BuzzerSolo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>
      </IonContent>
      
    </IonPage>
  );
};

export default BuzzerSolo;
