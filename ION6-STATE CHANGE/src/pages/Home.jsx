// Home.tsx
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { trashOutline, pencilOutline } from 'ionicons/icons';

import { useStudentStore } from '../store';
import AddStudentModal from '../components/AddStudentModal';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const students = useStudentStore(state => state.students);
  const addStudent = useStudentStore(state => state.addStudent);
  const removeStudent = useStudentStore(state => state.removeStudent);
  const updateStudent = useStudentStore(state => state.updateStudent);

  console.log(students);

  /**
   *
   * @param response
   */
  const handleModalClose = response => {
    setModalOpen(false);
    if (response) {
      console.log(response);
      if (response.id) {
        updateStudent({
          name: response.name,
          section: response.section,
          id: response.id
        });
      } else {
        addStudent({ name: response.name, section: response.section });
      }
    }
    modalData && setModalData(null);
  };

  const handleDelete = id => {
    removeStudent(id);
  };

  const editItem = item => {
    setModalData(item);
    setModalOpen(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Student Manager</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setModalOpen(true)}>ADD</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <!-- modal --> */}
        <IonModal isOpen={modalOpen}>
          <AddStudentModal
            onCloseModal={handleModalClose}
            initialData={modalData}
          />
        </IonModal>
        {/* <!-- list --> */}
        <IonList>
          {students.map(item => (
            <IonItem key={item.id}>
              <IonLabel onClick={() => history.push(`/detail/${item.id}`)}>
                <h1>{item.section}</h1>
                {item.name}
              </IonLabel>
              <IonButton
                onClick={() => handleDelete(item.id)}
                fill="outline"
                color="danger"
              >
                <IonIcon color="danger" icon={trashOutline} />
              </IonButton>
              <IonButton onClick={() => editItem(item)} fill="outline">
                <IonIcon icon={pencilOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Home);
