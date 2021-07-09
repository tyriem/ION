// AddStudentModal.tsx
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar
} from '@ionic/react';
import React, { useState, useEffect } from 'react';

const AddStudentModal = ({ onCloseModal, initialData }) => {
  const [section, setSection] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setSection(initialData?.section);
    setName(initialData?.name);
  }, []);

  const handleCancel = () => {
    onCloseModal(null);
  };

  const handleSave = () => {
    onCloseModal({
      name,
      section,
      id: initialData?.id
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar />
      </IonHeader>
      <IonContent className="ion-padding">
        <strong>Ready to create an app?</strong>
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel>Section</IonLabel>
          <IonSelect
            value={section}
            placeholder="Select One"
            onIonChange={e => setSection(e.detail.value)}
          >
            <IonSelectOption value="advanced">Advanced</IonSelectOption>
            <IonSelectOption value="beginners">Beginners</IonSelectOption>
          </IonSelect>
        </IonItem>
        <div style={{ paddingTop: 10 }}>
          <IonButton onClick={handleSave}>SAVE STUDENT</IonButton>
          <IonButton onClick={handleCancel} color="danger">
            CANCEL
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddStudentModal;
