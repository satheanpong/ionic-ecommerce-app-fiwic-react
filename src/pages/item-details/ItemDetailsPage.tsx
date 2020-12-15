import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonSlide,
  IonSlides,
  IonCol,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonFooter,
} from "@ionic/react";
import { createAnimation } from "@ionic/core";
import React, { useEffect, useState } from "react";
import "./ItemDetailsPage.scss";
import { useHistory } from "react-router-dom";
import { notificationsOutline, searchOutline } from "ionicons/icons";

const ItemDetailsPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<Number | undefined>();
  const [selectedColor, setSelectedColor] = useState<Number | undefined>();
  const [activeVariation, setActiveVariation] = useState<String | undefined>();

  useEffect(() => {
    debugger;
    setActiveVariation("size");
  }, []);

  const segmentChanged = (e: any) => {
    console.log(activeVariation);
    setActiveVariation(e.detail.value);

    if (activeVariation === "size") {
      createAnimation()
        .addElement(document?.querySelector(".sizes") as any)
        .duration(500)
        .iterations(1)
        .fromTo("transform", "translateX(0px)", "translateX(100%)")
        .fromTo("opacity", "1", "0.2")
        .play();

      createAnimation()
        .addElement(document.querySelector(".colors") as any)
        .duration(500)
        .iterations(1)
        .fromTo("transform", "translateX(-100%)", "translateX(0)")
        .fromTo("opacity", "0.2", "1")
        .play();
    } else {
      createAnimation()
        .addElement(document.querySelector(".sizes") as any)
        .duration(500)
        .iterations(1)
        .fromTo("transform", "translateX(100%)", "translateX(0)")
        .fromTo("opacity", "0.2", "1")
        .play();

      createAnimation()
        .addElement(document.querySelector(".colors") as any)
        .duration(500)
        .iterations(1)
        .fromTo("transform", "translateX(0px)", "translateX(-100%)")
        .fromTo("opacity", "1", "0.2")
        .play();
    }
  };

  return (
    <IonPage id="item-details-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              className="backbtn"
              routerLink="/home"
              routerDirection="back"
            >
              <img alt="back-btn" src="../../assets/back.svg" />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={searchOutline} color="dark"></IonIcon>{" "}
              <span>&nbsp;</span>
            </IonButton>
            <IonButton className="notification">
              <IonIcon icon={notificationsOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} className="product-slider">
          <IonSlide>
            <img src="../../assets/product-slider/prod-slide1.png" />
          </IonSlide>
          <IonSlide>
            <img src="../../assets/product-slider/prod-slide1.png" />
          </IonSlide>
          <IonSlide>
            <img src="../../assets/product-slider/prod-slide1.png" />
          </IonSlide>
        </IonSlides>

        <div className="ion-padding-vertical">
          <h1 className="item-name">Black Turtleneck Top</h1>
          <h4 className="price">
            $42
            <span className="real-price">$62</span>
          </h4>
        </div>

        <div className="seperator">
          <hr />
        </div>

        <div className="review">
          <IonRow>
            <IonCol size="6">
              <div className="rating">4.5</div>
              Very Good
            </IonCol>
            <IonCol size="6">
              <div className="count">49 Reviews</div>
            </IonCol>
          </IonRow>
        </div>

        <div className="seperator">
          <hr />
        </div>

        <div className="description">
          <h5>Description</h5>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        <div className="seperator">
          <hr />
        </div>
        <div className="variation">
          <IonSegment
            onIonChange={(e) => segmentChanged(e)}
            value={activeVariation as any}
          >
            <IonSegmentButton value={"size"}>
              <IonLabel>Select Size</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={"color"}>
              <IonLabel>Select Color</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div className="seperator">
          <hr />
        </div>

        <div className="variation-selector">
          <div
            className={`sizes ${
              activeVariation === "size" ? "active-variation" : ""
            }`}
          >
            <div
              className={`${selectedSize === 1 ? "active" : ""}`}
              onClick={() => setSelectedSize(1)}
            >
              S
            </div>
            <div
              className={`${selectedSize === 2 ? "active" : ""}`}
              onClick={() => setSelectedSize(2)}
            >
              M
            </div>
            <div
              className={`${selectedSize === 3 ? "active" : ""}`}
              onClick={() => setSelectedSize(3)}
            >
              L
            </div>
            <div
              className={`${selectedSize === 4 ? "active" : ""}`}
              onClick={() => setSelectedSize(4)}
            >
              XL
            </div>
          </div>

          <div
            className={`colors ${
              activeVariation === "color" ? "active-variation" : ""
            }`}
          >
            <div
              className={`${selectedColor === 1 ? "active" : ""}`}
              onClick={() => setSelectedColor(1)}
            >
              BLACK
            </div>
            <div
              className={`${selectedColor === 2 ? "active" : ""}`}
              onClick={() => setSelectedColor(2)}
            >
              GREEN
            </div>
            <div
              className={`${selectedColor === 3 ? "active" : ""}`}
              onClick={() => setSelectedColor(3)}
            >
              BLUE
            </div>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonRow>
          <IonCol size="6">
            <IonButton expand="full" color="light">
              Add to cart
            </IonButton>
          </IonCol>
          <IonCol size="6">
            <IonButton expand="full">Buy now</IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default ItemDetailsPage;
