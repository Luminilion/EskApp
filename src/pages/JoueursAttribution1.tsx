import { IonContent, IonHeader, IonPage,IonCardContent, IonTitle, IonToolbar, IonGrid, IonRow , IonCol, IonIcon, IonButton} from '@ionic/react';
import './JoueursAttribution1.css';
import logo from '../img/logo.png';

let user_names = ['Tintin', 'Haddock', 'Calculus', 'Alcazar', 'Sonwy', 'Tapioca', 'Wolf', 'Muller' ]

const JoueursAttribution1: React.FC = () => {
  return (
    <IonPage >

      <IonHeader>
        <IonToolbar>
          <div>
        <img src={logo} height="50" width="150" /> 
        <IonTitle class="ion-text-center" >Groupe 1</IonTitle>
        </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-text-center">
      
        <br />
        <br />
        Le groupe 1 sera constitué des joueurs suivants.
        <br />
        <br />
        <br />
      
        SVP suivez l'ordre, prenez que les n premiers noms si vous etes n joueurs
        <br />
        <br />
        <br />
        <br />
        Choisissez votre personnage!

      </IonContent>

      <IonGrid class="paddingGrid" >
  <IonRow >
    <IonCol >
    <IonButton class ="roundName"   icon-only>  1. {user_names[1]} </IonButton >
    </IonCol>
    <IonCol  >
    <IonButton class ="roundName" icon-only>  2. {user_names[2]} </IonButton >
    </IonCol>
    <IonCol >
    <IonButton class ="roundName" icon-only>  3. {user_names[3]} </IonButton >
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol >
    <IonButton class ="roundName" icon-only>  4. {user_names[4]} </IonButton >
    </IonCol>
    <IonCol >
    <IonButton class ="roundName" icon-only>  5. {user_names[5]} </IonButton >
    </IonCol>
    <IonCol >
    <IonButton class ="roundName" icon-only>  6. {user_names[6]} </IonButton >
    </IonCol>
  </IonRow>
</IonGrid>

<IonCardContent class="ion-text-center" >
   <IonButton color="success" > Groupe suivant </IonButton >
   </IonCardContent>
    </IonPage>
  );
};

export default JoueursAttribution1;