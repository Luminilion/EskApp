// Import libraries
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Import components
import Home from './pages/Home';
import NumberOfPlayers from './pages/NumberOfPlayers';
import Enigma from './pages/Enigma'
import JoueursAttribution1 from './pages/JoueursAttribution1';
import JoueursAttribution2 from './pages/JoueursAttribution2';
import Indications from './pages/enigma/Indications';
import Buzzer from './pages/enigma/Buzzer';
import BuzzerSolo1 from './pages/enigma/BuzzerSolo_1';
import BuzzerSolo2 from './pages/enigma/BuzzerSolo_2';
import Reponse1 from './pages/enigma/Reponse_1';
import Reponse2 from './pages/enigma/Reponse_2';
import Endgame from './pages/Endgame';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*
Notes :
  - pour l'instant pour voir les pages, il faut changer
  dans l'url le "/home" en "/buzzer" pour aller sur le buzzer par exemple

*/
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/enigma">
          <Enigma />
        </Route>

        <Route exact path="/indications">
          <Indications />
        </Route>
        <Route exact path="/buzzer">
          <Buzzer />
        </Route>
        <Route exact path="/buzzerSolo_1">
          <BuzzerSolo1 />
        </Route>
        <Route exact path="/buzzerSolo_2">
          <BuzzerSolo2 />
        </Route>
        <Route exact path="/reponse_1">
          <Reponse1/>
        </Route>
        <Route exact path="/reponse_2">
          <Reponse2/>
        </Route>
        <Route exact path='/numberOfPlayers'>
          <NumberOfPlayers />
        </Route>
        <Route exact path="/joueursAttribution1">
          <JoueursAttribution1 />
        </Route>
        <Route exact path="/joueursAttribution2">
          <JoueursAttribution2 />
        </Route>
        <Route exact path="/endgame">
          <Endgame />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
