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


  /*var state = { name: '', phone: '', email: '', hint: '' };

  let handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  const [input, setInput] = useState('')

  var state = {
    value: "correct",
    response: "On attend la reponse ...",
  };

  let check = (text: string) => {
    if (state.value == text)
      {

      return {response : "Bravo, c'est la bonne reponse!"}
    }
    else{
      return {response : "Oups, mauvaise reponse!"}
    }
    return state;
  };

*/

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
        La première équipe doit saisir sa réponse :

        <br />
        <br />
        <IonInput value={text} placeholder="votre reponse ..." onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>

      </IonContent>

      <IonContent class="ion-text-center"  >
        <IonButton
          color="primary"

          onClick={() => check()}
        >
          {"verifier la reponse"}
        </IonButton>
      </IonContent>




      <IonContent class="ion-text-center" >

        <IonCardContent >

          <IonButton shape="round" color={color} > {response} </IonButton>

        </IonCardContent>
      </IonContent>

      <IonContent class="ion-text-center"  >
        <IonButton
          color="primary"

          routerLink={link}
        >
          {"next"}
        </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Reponse1;
