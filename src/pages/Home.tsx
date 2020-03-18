import { IonContent, IonList, IonPage } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ArticleItem from '../components/ArticleItem'
import { get, set, remove } from "../services/storage";
import { getNetworkStatus } from "../services/network";
import './Home.css';
import { CONFIG } from "../constants"

const articlesFromLocalStorage = get("articles");

const fetchArticles = () => {

  return getNetworkStatus().then((isOnline) => { 
    if(isOnline) {
      remove("articles");
      return fetch(CONFIG.API_ENDPOINT)
        .then(res => res.json())
        .then((data) => {
          set("articles", data.articles);
          return data.articles;
        })
        .catch(console.log)
    } else {
      return articlesFromLocalStorage.then((data) => {
        console.log(data);
        return data;
      })
    }
  });

};

const Home: React.FC = (props) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    fetchArticles().then(data => setArticles(data));

  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {Object.keys(articles).length > 0 ? articles.map((article, idx) => <ArticleItem key={idx} article={article} />) : "No news found"}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
