import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonSlide,
  IonSlides,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { funnelOutline, notificationsOutline } from "ionicons/icons";
import "./Home.scss";

import DataService, { ICategory, IProduct } from "../dataservice";

const Home: React.FC = () => {
  const categories = DataService.getCategories();
  const featuredProducts = DataService.getFeaturedProducts();
  const bestSellProducts = DataService.getBestSellProducts();

  //[options]="{ slidesPerView: 'auto', zoom: false, grabCursor: true }"

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <img alt="img" src="../../assets/menu_bar.svg" />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton className="notification">
              <IonIcon icon={notificationsOutline} color="dark"></IonIcon>{" "}
              <span>&nbsp;</span>
            </IonButton>
            <IonButton className="filter">
              <IonIcon icon={funnelOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search ion-padding">
          <IonItem lines="none">
            <IonInput placeholder="Search Your Product"></IonInput>
            <IonIcon name="search-outline" slot="start"></IonIcon>
          </IonItem>
        </div>
        <div className="title ion-padding">
          <h2>Categories</h2>
          <p>See all</p>
        </div>

        <div className="category-slider ion-padding-start">
          <IonSlides
            options={{ slidesPerView: "auto", zoom: false, grabCursor: true }}
          >
            {categories.map((category: ICategory) => {
              return (
                <IonSlide key={"category" + category.id}>
                  <IonCol>
                    <h4>{category.name}</h4>
                    <img alt="img" src={category.image} />
                  </IonCol>
                </IonSlide>
              );
            })}
          </IonSlides>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Featured</h2>
          <p>See all</p>
        </div>

        <div className="product-slider ion-padding-start">
          <IonSlides
            options={{ slidesPerView: "auto", zoom: false, grabCursor: true }}
          >
            {featuredProducts.map((product: IProduct) => {
              return (
                <IonSlide key={"product" + product.id}>
                  <IonCol className="ion-text-left">
                    <img alt="img" src={product.image} />
                    <p>${product.price}</p>
                    <h6>{product.name}</h6>
                  </IonCol>
                </IonSlide>
              );
            })}
          </IonSlides>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Featured</h2>
          <p>See all</p>
        </div>
        <div className="product-slider ion-padding-start">
          <IonSlides
            options={{ slidesPerView: "auto", zoom: false, grabCursor: true }}
          >
            {bestSellProducts.map((product: IProduct) => {
              return (
                <IonSlide key={"product" + product.id}>
                  <IonCol className="ion-text-left">
                    <img alt="img" src={product.image} />
                    <p>${product.price}</p>
                    <h6>{product.name}</h6>
                  </IonCol>
                </IonSlide>
              );
            })}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
