import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
// IMPORT THE CAMERA MODULE
import { Camera, CameraResultType } from '@capacitor/camera';
// IMPORT THE USESTATE MODULE
import { useState } from "react";

import './Home.css';

const Home: React.FC = () => {
// LOGIC

const [image, setImage] = useState<any>("");
// CAMERA LOGIC
const takePicture = async () => {
  const cameraResult = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });

  var imageUrl = cameraResult.webPath;
  //
  //
  console.log(image);
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CAMERA APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Modified IonContent to add 16px Padding */}
      <IonContent fullscreen className="ion-padding">

        <div>BASIC CAMERA APP</div>
        <IonButton onClick={() => takePicture()}>TAKE PHOTO</IonButton>
        <IonImg src={image}></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Home;
