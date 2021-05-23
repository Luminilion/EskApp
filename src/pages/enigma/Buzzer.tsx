import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonApp,
  IonCardContent,
  IonButton,
  IonModal,
  IonInput
} from '@ionic/react';
import './Buzzer.css';
import './BuzzerSolo.css';
import CountDownTimer from './CountDownTimer';
import logo from '../../img/logo.png';
import { useState, useEffect } from 'react';
import { useHistory, useLocation} from 'react-router';
import enigmas from '../../res/enigmas';
import {nb_rounds, nb_teams } from '../../res/constants';

const Buzzer: React.FC = () => {

  const history = useHistory();
  const location = useLocation();

  // Modal reactions
  const rep_attente = "On attend votre réponse";
  const rep_faux = "Oups, mauvaise réponse!";
  const rep_correct = "Bravo, c'est la bonne reponse!";
  const action_done = "Validate";
  const action_back = "Back";
  const col_attente = "warning";
  const col_faux = "danger";
  const col_correct = "success";

  // get correct answers
  const answer1 = enigmas[nb_teams*(nb_rounds-location.roundsLeft)].answer;
  const answer2 = enigmas[nb_teams*(nb_rounds-location.roundsLeft) + 1].answer;
  // set nbr of rounds left
  const roundsLeft = location.roundsLeft-1;

  // Defines timer
  const hoursMinSecs= { hours: 0, minutes: 10, seconds: 0 };
  //const hoursMinSecs = { hours: 0, minutes: 10, seconds: 0 }
  // Defines team state
  let [reussite1, setRe1] = useState<boolean>(false);
  let [reussite2, setRe2] = useState<boolean>(false);
  // defines winner state
  let [oneWin, setOneWin] = useState<boolean>(false);
  // Defines answer submission
  let [openModal, setOpenModal] = useState<boolean>(false);

  // Modal team submitting answer
  let [teamNumber, setTeamNumber] = useState<int>(1);
  // Real answer
  let [answer, setAnswer] = useState<string>();
  // Modal answer submission
  let [text, setText] = useState<string>();
  // Modal reaction
  let [response, setResponse] = useState<string>(rep_attente);
  let [endAction, setEndAction] = useState<string>(action_back);
  let [color, setColor] = useState<string>("warning");

  // Conditional buzzer display
  let [isBuzzer1, setIsBuzzer1] = useState<boolean>(true);
  let [isBuzzer2, setIsBuzzer2] = useState<boolean>(true);

  // function called when modal is opened
  function checkAnswer(team: int, answer: string) {
    let found = false;
    if ((team === 1 && reussite1 == true) || (team === 2 && reussite2 == true)) {
      found = true;
    }

    if (found) {
      setEndAction(action_back);
      setColor(col_correct);
      setResponse(rep_correct);
    } else {
      setEndAction(action_back);
      setColor(col_attente);
      setResponse(rep_attente);
    }
    setTeamNumber(team);
    setOpenModal(true);
    setAnswer(answer);
  }

  // function called when correct answer is validated
  function finishedAnswer(team: int) {
    if (response === rep_correct) {
      if (team === 1) {
        setRe1(true);
        setIsBuzzer1(false);
        setOneWin(true);
      } else {
        setRe2(true);
        setIsBuzzer2(false);
        setOneWin(true);
      }
    }
    setOpenModal(false);
  }

  // function checking if answer is correct and deriving modal reaction
  let check = () => {
    if (!text) {
      setResponse(rep_attente)
      setColor(col_attente)
    }
    else if (text == answer) {
      setResponse(rep_correct);
      setColor(col_correct);
      setEndAction(action_done);
    }
    else {
      setResponse(rep_faux)
      setColor(col_faux)
    }
  };

  // function to execute on end of both teams or end of timer
  function endRound() {
    let results = new Array();
    if (reussite1 == true) {
      results = results.concat("Equipe 1");
    }
    if (reussite2 == true) {
      results = results.concat("Equipe 2");
    }
    if (roundsLeft >0) {
      history.replace({
        pathname: '/endround',
        results: results,
        roundsLeft: roundsLeft,
        score1: location.score1+reussite1,
        score2: location.score2+reussite2,
      })
    } else {
      history.replace({
        pathname: '/endgame',
        results: results,
        score1: location.score1+reussite1,
        score2: location.score2+reussite2,
      })
    }
  }

  // called when reussite1 or reussite2 changes state
  useEffect(() => {
    if (reussite1 == true && reussite2 == true) {
      endRound();
    }
  }, [reussite1, reussite2]);

  return (
    <IonPage>

      <IonHeader  >
        <IonToolbar>
          <img src={logo} height="50" width="150" />
          <IonTitle class="ion-text-center"> Buzzer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div class="ion-text-center" >
        <p>Si vous pensez avoir la réponse  appuyer sur votre buzzer:</p>
      </div>

      { isBuzzer1 &&
      <IonContent color="secondary" >
        <IonButton class="roundBuzzer" size="large" shape="round" color="tertiary" onClick={() => { checkAnswer(1, answer1) }}>Team 1</IonButton>
      </IonContent> }

      { !isBuzzer1 &&
      <IonContent color="secondary"  >
        <h1 className="congrats">Bravo !</h1>
        <div className="text">Vous avez trouvé l'indice !</div>
        <div className="text">L'équipe adverse n'a plus beaucoup de temps</div>
      </IonContent> }

      <div class="ion-text-center">
        <IonButton color="tertiary" >
          <CountDownTimer hoursMinSecs={hoursMinSecs}
                          oneWin={oneWin}
                          registerOneWin={setOneWin}
                          resetFunc={endRound}
          />
        </IonButton>
      </div>

      {isBuzzer2 &&
      <IonContent color="warning">
        <IonButton class="roundBuzzer" size="large" shape="round" color="tertiary" onClick={() => { checkAnswer(2, answer2) }}>Team 2</IonButton>
      </IonContent> }

      { !isBuzzer2 &&
      <IonContent color="warning"  >
        <h1 className="congrats">Bravo !</h1>
        <div className="text">Vous avez trouvé l'indice !</div>
        <div className="text">L'équipe adverse n'a plus beaucoup de temps</div>
      </IonContent> }

      <IonModal isOpen={openModal}>
        <IonHeader>
          <IonToolbar>
            <img src={logo} height="50" width="150" />
            <IonTitle class="ion-text-center">Reponse</IonTitle>
            <br /><br /><br />
          </IonToolbar>
        </IonHeader>

        <IonContent class="ion-text-center">
          <br />
          Equipe {teamNumber},  saisissez votre réponse:
          <br /><br />
          <IonInput value={text} placeholder="Votre reponse ..." onIonChange={e => { text = e.detail.value! }} clearInput></IonInput>
          <br /><br />
          <IonButton color="primary" onClick={() => check()}>
            {"verifier la reponse"}
          </IonButton>
          <br /><br /><br />
          <IonButton shape="round" color={color} disabled> {response} </IonButton>
          <br /><br /><br />
          <IonButton color="primary" onClick={() => { finishedAnswer(teamNumber) }}>
            {endAction}
          </IonButton>
        </IonContent>
      </IonModal>

    </IonPage>
  );
};

export default Buzzer;
