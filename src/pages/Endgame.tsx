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

      


<IonContent color="warning">  {/*   Secondary color for the bleu team */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="hello" >C'est la seconde équipe <br></br>qui a gagné !</div>   {/*logic pour équipe bleu */}
        <div className="hello" > Bravo à tous ! </div>
      </IonContent>






      <IonContent >  {/*   Secondary color for the bleu team */}

      <IonCardContent > 
          <IonButton class="roundBuzzer"size="large" shape="round" color="secondary" >Retour au Menu</IonButton>
      </IonCardContent>

      </IonContent>
      



      

    </IonPage>
  );
};

export default Endgame;
