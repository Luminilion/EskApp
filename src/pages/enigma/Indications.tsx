import { IonContent, IonButton } from '@ionic/react';
import './Indications.css';
import React from "react";
import enigmas_data from "../../res/enigmas.json";
import { Enigma } from "../../hooks/EnigmaType";


type IndicationsProps = {
  enigma1: Enigma,
  enigma2: Enigma,
  closeAction: Function
}

class Indications extends React.Component<IndicationsProps> {

  render() {

    return (
      <>
        <p>{this.props.enigma1.cacher}</p>

        <IonButton onClick={() => this.props.closeAction()}>Suivant</IonButton>
      </>
    );
  }
};

export default ({closeAction, enigma1, enigma2}: { closeAction: Function, enigma1:Enigma, enigma2: Enigma }) => (
  <Indications closeAction={closeAction} enigma1={enigma1} enigma2={enigma2}>
  </Indications>
);
