import React from "react";
import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";

const SmallHeader = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar style={{backgroundColor: "#cc4d29"}} color="primary">
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default SmallHeader;