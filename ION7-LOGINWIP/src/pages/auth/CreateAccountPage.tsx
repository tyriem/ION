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
//IMPORT SUPABASE FROM THE FOLDER UPSTREAM
import { supabase } from "../../store/supabase"

const CreateAccountPage: React.FC = () => {
  const history = useHistory();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //FUNC doCreateAccount RAN ASYNCHRONOUSLY TO ACCOMODATE THE SUPABASE
  //NB: WE MUST RUN IT ASYNC BECAUSE SUPABASE IS RAN WITH AWAIT
  const doCreateAccount = async () => {
    // CONST response holds error, data, user, session
    const response = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // PRESENT ERROR IF ANY THROWN
    if (response.error) {
      alert(response.error);
      return;
    } else {

      // FEED DATA TO PROFILE PAGE
      const { data, error } = await supabase
      .from('profiles')
      .upsert({ id : response.user?.id, updated_at : new Date(), username: email, first: first, last: last})

      if (error) {
        alert(error.message);
      }

      //TAKE USER TO PAGE: HOME
      history.replace("/home");
    }
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CREATE ACCOUNT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="fixed">First</IonLabel>
          <IonInput
            onIonChange={(event: any) => setFirst(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Last</IonLabel>
          <IonInput onIonChange={(event: any) => setLast(event.target.value)} />
        </IonItem>
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
        <IonButton onClick={() => doCreateAccount()}>CREATE ACCOUNT</IonButton>
        <IonButton routerLink={"/auth/login"}>CANCEL</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccountPage;
