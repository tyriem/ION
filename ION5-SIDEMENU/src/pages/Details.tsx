import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';


const [present] = useIonAlert();

const showAlert = () => {
  present({
    cssClass: 'my-css',
    header: 'Alert',
    message: 'alert from hook',
    buttons: [
      'Cancel',
      { text: 'Ok', handler: (d) => console.log('ok pressed') },
    ],
    onDidDismiss: (e) => console.log('did dismiss'),
});


const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={()=> doShowAlert}></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
