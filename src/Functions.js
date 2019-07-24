import FormData from 'FormData';
const api_url = 'https://belinow.com/appApi.php';
import {urls} from './constants/constants';
export const apiData = (data)=> new Promise((resolve, reject)=>{
    fetch(api_url, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then((response) => response.json())
      .then((responseData) => { resolve(responseData); })
      .catch((err) => { reject(err); });
    })
   export function validatePassword  (pass){
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      return  /[a-z]/g.test(pass) &&  pass.length >= 12  && format.test(pass) && /[A-Z]/g.test(pass); 
     
    }
    export const createFormData = (body)=>{
      const data = new FormData();
      data.append(body); 
      Object.keys(body).forEach(key => {
          data.append(key, body[key]);
      });
       return data;
   }
   export const mongoData = (data=>{
    fetch(urls.url+'/appData',{
          method: 'POST',
          body: createFormData(data)
      }).then(res => res.json())
      .then(obj => {
        
      })
   });
   export function returnDate (milliseconds){
     var date = new Date(milliseconds),
      hours = date.getHours(), minutes = date.getMinutes(),
      yesterday = new Date(new Date().setDate(new Date().getDate()-1)),
      today = new Date();
      date = date.toDateString();
      yesterday = yesterday.toDateString();
      today = today.toDateString();
     return [(date == yesterday?'Yesterday':date == today?'Today':date),(hours<10?'0'+hours:hours)+':'+(minutes<10?'0'+minutes:minutes)];
   }
   export function discounted (regular_price,sale_price, off){
    var percentage = (((sale_price-regular_price)*100)/regular_price).toFixed(2);
    return (percentage < 0 && !off ?percentage:percentage < 0 && off?Math.round(Math.abs(percentage)):false); 
}