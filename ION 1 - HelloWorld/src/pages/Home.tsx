import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TMRM FIRST MOBILE APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TMRM: HelloWorld</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div><h1>HELLO WORLD!</h1></div>
        <div><h2>VERSION 2.0 NOW WITH FAST RELOAD!</h2></div>
        

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
