import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/react";
import React from "react";
import "./WelcomePage.css";

const WelcomePage: React.FC = () => {
  return (
    <IonPage id="welcome">
      <IonHeader></IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <div className="container">
          <div className="page-header">
            <h1>Welcome to Bolt</h1>
            <h3>Explore Us</h3>
          </div>

          <img alt="welcome" src="../../assets/welcome.png" />

          <div className="button-container">
            <IonButton
              expand="block"
              class="main-button"
              routerLink="/login"
              routerDirection="forward"
            >
              Log in
            </IonButton>
            <IonButton
              expand="block"
              color="dark"
              fill="clear"
              routerLink="/signup"
              routerDirection="forward"
            >
              Signup
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
