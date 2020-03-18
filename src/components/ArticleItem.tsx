import React from 'react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';
import './ArticleItem.css';
import { Article } from '../models/Article'

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <IonItem text-wrap>
      <IonAvatar slot="start">
        <img src={article.urlToImage} alt={article.title} />
      </IonAvatar>
      <IonLabel className="ion-text-wrap">
        <p>{article.title}</p>
      </IonLabel>
    </IonItem>
  );
}
export default ArticleItem;
