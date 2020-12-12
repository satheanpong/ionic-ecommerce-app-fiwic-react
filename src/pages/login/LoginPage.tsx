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
import "./LoginPage.scss";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const history = useHistory();
  const login = () => {
    history.replace("/home");
  };
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
              <img alt="back-btn" src="../../assets/back.svg" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="ion-padding container">
          <h1>Login</h1>

          <div className="form-container">
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
              onClick={() => login()}
            >
              Log in
            </IonButton>

            <div className="sign-up">
              Don't have an account?{" "}
              <IonButton
                color="dark"
                fill="clear"
                routerLink="/signup"
                routerDirection="forward"
              >
                Sign up
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
