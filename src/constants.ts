export interface AppConfig {   
    API_ENDPOINT : string;
  }  
  
export const CONFIG: AppConfig = {
    API_ENDPOINT : "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e40d07f00b094602953cc3bf8537477e"
  };