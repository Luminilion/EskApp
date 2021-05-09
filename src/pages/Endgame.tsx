import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonButton } from '@ionic/react';
import './Endgame.css';
import logo from '../img/logo.png';

const Endgame: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <img src={logo} height="50" width="150" />
        <IonToolbar >
          

          <IonTitle class="ion-text-center">Fin de la partie</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="secondary">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="hello" >C'est l'équipe bleue qui a gagné !</div>
        <div className="hello" > Bravo à tous ! </div>
      </IonContent>

      <IonContent color="secondary">

      <IonCardContent > 
          <IonButton class="roundBuzzer"size="large" shape="round" color="warning" >Retour au Menu</IonButton>
      </IonCardContent>

      </IonContent>
      



      

    </IonPage>
  );
};

export default Endgame;
