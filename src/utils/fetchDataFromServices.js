import newsServices from '../config/services';

export const fetchDataFromServices = function (addServiceData){
  const myHeaders = new Headers();
  myHeaders.append('pragma', 'no-cache');
  myHeaders.append('cache-control', 'no-cache');
  const fetchConfig = {
      method: 'GET',
      headers: myHeaders,
  };
  Object.keys(newsServices).forEach((key) => {
      if (key === 'noticiaCla') {

          try{
              fetch(newsServices[key], fetchConfig).then((response) => response.json()).then((responseJson) => {addServiceData(key, responseJson.items)})
          }
          catch (e) {

          }
      } else {
          try{
              fetch(newsServices[key], fetchConfig).then((response) => response.json()).then((responseJson) => {addServiceData(key, responseJson)})
          } catch (e) {

          }
      }
  })
}