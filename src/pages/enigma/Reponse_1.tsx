import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonApp,
  IonInput,
  IonButton
} from '@ionic/react';
import './Reponse.css';
import { useState, FormEvent } from 'react';
import logo from '../../img/logo.png';

const Reponse1: React.FC = () => {

  const [text, setText] = useState<string>();
  const [response, setResponse] = useState<string>("On attend votre reponse");
  const [color, setColor] = useState<string>("warning");
  const [link, setLink] = useState<string>("/buzzer");

  let check = () => {


    if (!text) {
      //setResponse("Oups, mauvaise reponse!")
      setResponse("On attend votre reponse")
      setColor("warning")
      setLink("/buzzer")
    }
    else if (text == 'hello') {

      //setResponse("Bravo, c'est la bonne reponse!")
      setResponse("Bravo, c'est la bonne reponse!")
      setColor("success")
      setLink("/buzzerSolo_1")
    }
    else {

      setResponse("Oups, mauvaise reponse!")
      setColor("danger")
      setLink("/buzzer")
    }
  };


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center">Reponse</IonTitle>
          <br />
          <br />
          <br />
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-text-center">
        <br />
        La première équipe doit saisir sa réponse :
        <br />
        <br />
        <IonInput value={text} placeholder="Votre reponse ..." onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
        <br />
        <br />
        <IonButton color="primary" onClick={() => check()}>
          {"verifier la reponse"}
        </IonButton>
        <br />
        <br />
        <br />
        <IonButton shape="round" color={color} disabled> {response} </IonButton>
        <br />
        <br />
        <br />
        <IonButton color="primary" routerLink={link}>
          Next
        </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Reponse1;
