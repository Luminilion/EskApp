import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Reponse.css';

const Reponse: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Reponse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>
      </IonContent>

    </IonPage>
  );
};

export default Reponse;
