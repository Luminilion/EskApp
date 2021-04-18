import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Indications.css';

const Indications: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Indications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p>Fill me in!</p>
      </IonContent>

    </IonPage>
  );
};

export default Indications;
