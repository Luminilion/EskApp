import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonApp,
  IonButton
} from '@ionic/react';
import './Reponse.css';
import logo from '../../img/logo.png';

const Reponse: React.FC = () => {
  return (
    <IonApp>

      <IonHeader  >
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center"> Reponse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonToolbar class="ion-text-center" >
        <br />


      </IonToolbar>


      <IonContent class="ion-text-center"  >
        <br />
        <br />
        Veuillez entrer votre reponse
			  <br />
        <br />
        <input
          type="text"

          placeholder="Response"
          name="summary"

        />

      </IonContent>


      <IonContent class="ion-text-center" >

        <IonCardContent >
          <IonButton shape="round" color="success"  > Yes  </IonButton>
          <IonButton shape="round" color="danger"   > No  </IonButton>
        </IonCardContent>
      </IonContent>

    </IonApp>
  );
};

export default Reponse;
