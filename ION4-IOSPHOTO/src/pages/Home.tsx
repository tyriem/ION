import {
  IonButton, //IMPORT Button Module
  IonContent,
  IonHeader,
  IonImg, // IMPORT the Img Module
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Camera, CameraResultType } from "@capacitor/camera"; // IMPORT Camera & CameraRT FROM Cap
import { useState } from "react"; // IMPORT useState FROM react

/// LOGIC ///

// TODO: ADD TRY-CATCH TO LOGIC
const Home: React.FC = () => {
  const [image, setImage] = useState<any>("");

  const takePicture = async () => { //Grab the picture with asynchronous threading
    const cameraResult = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    setImage(cameraResult.webPath);

    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
    console.log(image);
  };


  /// RENDER ///
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* TITLE OF PAGE */}
          <IonTitle>PHOTO APP</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Pad visible DIVs with 16px */}
      <IonContent fullscreen className="ion-padding">

        {/* DIV: Heading for App */}
        <div><h1>BASIC CAMERA AND IMAGE UPLOAD</h1></div>
        
        {/* ION-BUTTON: Click to Take Picture OR Select Image */}
        <IonButton onClick={() => takePicture()}>CLICK ME</IonButton>

        {/* ION-IMG: Render Image */}
        <IonImg src={image}></IonImg>

      </IonContent>
    </IonPage>
  );
};

export default Home;