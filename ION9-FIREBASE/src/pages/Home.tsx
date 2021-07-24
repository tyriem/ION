import MessageListItem from "../components/MessageListItem";
import { useState } from "react";
import { Message, getMessages } from "../data/messages";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";
import { useEffect } from "react";

/// FIREBASE IMPORTS ///
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  //THIS IS ONLY RUN ONCE
  useEffect(() => {
    // FIREBASE API KEY DATA //
    var firebaseConfig = {
      //CONFIGURATION INFORMATION FOR FIREBASE GOES HERE
      apiKey: "AIzaSyC7t7ADr8QUEMfbnV4Xa8wX-U3hPO2izD4",
      authDomain: "test-il-ab952.firebaseapp.com",
      projectId: "test-il-ab952",
      storageBucket: "test-il-ab952.appspot.com",
      messagingSenderId: "559018443565",
      appId: "1:559018443565:web:d3cf1d590e3c97e5f789a4",
      measurementId: "G-6TVWEP6KEQ",
    };
    //Initialise Firebase
    firebase.initializeApp(firebaseConfig);

    //READ DATA
    //https://firebase.google.com/docs/firestore/query-data/get-data

    //get firebase firestore database
    const db = firebase.firestore();

    //HERE WE SET db.collection to the collection name we set in firebase the .doc to the document id we set in firebase
    var docRef = db.collection("data").doc("Kxyvcc7i9vUWdzE3SVKB");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    /// GET ALL THE DATA ///
    // https://firebase.google.com/docs/firestore/query-data/queries
    db.collection("data")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    //AUTH https://firebase.google.com/docs/auth/?authuser=2#:~:text=authenticate%20users%20by%20integrating%20with%20federated%20identity%20providers.%20the%20firebase%20authentication%20sdk%20provides%20methods%20that%20allow%20users%20to%20sign%20in%20with%20their%20google%2C%20facebook%2C%20twitter%2C%20and%20github%20accounts.
  }, []);

  //WHENEVER AN ION COMPONENT ENTERS INTO VIEW GO GET THE DATA
  useIonViewWillEnter(() => {
    //GET THE MESSAGES (DATA)
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
