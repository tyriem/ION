import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const doLogin = () => {
    alert(`email is ${email} and password is ${password}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN PAGE</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="fixed">email</IonLabel>
          <IonInput
            onIonChange={(event: any) => setEmail(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">password</IonLabel>
          <IonInput
            type="password"
            onIonChange={(event: any) => setPassword(event.target.value)}
          />
        </IonItem>
        <IonButton onClick={() => doLogin()}>LOGIN</IonButton>
        <IonButton routerLink={"/auth/create-account"}>
          CREATE ACCOUNT
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
