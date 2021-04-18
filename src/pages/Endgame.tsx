import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Endgame.css';

const Endgame: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Endgame</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>
      </IonContent>

    </IonPage>
  );
};

export default Endgame;
