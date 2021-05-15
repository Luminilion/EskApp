import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonApp,
  IonCardContent,
  IonButton} from '@ionic/react';
import './BuzzerSolo.css';
import logo from '../../img/logo.png';
import CountDownTimer from './CountDownTimer';

const hoursMinSecs = {hours:0, minutes: 1, seconds: 0}

const BuzzerSolo: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle>BuzzerSolo</IonTitle>
        </IonToolbar>
      </IonHeader>
     <IonContent  color="secondary"  >
 

 <IonCardContent class="ion-text-center">
 <br />
        <br />
        <br />
        <br />
   <IonButton class="roundBuzzer"size="large" shape="round" color="tertiary" routerLink="/reponse">Team </IonButton>
 </IonCardContent>

</IonContent>

<IonToolbar class="ion-text-center">
<br />
        <br />
 <IonButton color="tertiary" routerLink="/endGame">  <CountDownTimer hoursMinSecs={hoursMinSecs}/> </IonButton>
</IonToolbar>

<IonContent   color="warning">


<IonToolbar class="ion-text-center">
  

 </IonToolbar>
  <h1 className="congrats">Bravo ! </h1>
  <div className="text">
      Vous avez trouvé l'indice !   
  </div>
  <div className="text">
      L'équipe adverse n'a plus beaucoup de temps
  </div>
</IonContent>     
      
    
</IonPage>
  );
};

export default BuzzerSolo;
