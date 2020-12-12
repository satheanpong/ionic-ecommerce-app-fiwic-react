import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
} from "@ionic/react";
import React from "react";
import "./SignupPage.scss";

const SignupPage: React.FC = () => {
  const signup = () => {};
  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              className="backbtn"
              routerLink="/welcome"
              routerDirection="back"
            >
              <img alt="back" src="../../assets/back.svg" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="ion-padding container">
          <h1>Signup</h1>

          <div className="form-container">
          <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"></IonInput>
              <IonIcon name="eye" slot="end"></IonIcon>
            </IonItem>

            <IonButton
              expand="block"
              class="main-button"
              onClick={() => signup()}
            >
              Sign Up
            </IonButton>

            <div className="sign-up">
              Already have an account?{" "}
              <IonButton
                color="dark"
                fill="clear"
                routerLink="/login"
                routerDirection="forward"
              >
                Sign In
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
