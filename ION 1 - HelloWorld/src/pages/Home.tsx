import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
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

          {/* TOOL BAR COMPONENT */}
          <IonToolbar>
            <IonTitle size="large">TMRM: HelloWorld</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* RAW DIVs */}
        <div><h1>HELLO WORLD!</h1></div>
        <div><h2>VERSION 2.0 NOW WITH FAST RELOAD!</h2></div>

        <div><ul>
          <li>Start Ionic</li>
          <li>Serve Ionic</li>
          <li>Build Ionic</li>
          </ul></div>
        
          {/* CARD COMPONENT */}
          <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>THIS IS A SUBTITLE FOR THE HELLO WORLD CARD</IonCardSubtitle>
            <IonCardTitle>HELLO WORLD CARD</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            This is the content for the Hello World Card. LOREM IPSUM. LOREM IPSUM!
      </IonCardContent>
        </IonCard>
      
      </IonContent>
    </IonPage>
  );
};

export default Home;
