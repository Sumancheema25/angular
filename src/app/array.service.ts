
import { Injectable } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  

  constructor() {}
  array = [{'Id': '11','First-name' : "jaspreet",'Last-name' : "singh", 'E-mail' : "jas@ymail.com",'DOB' : '04-feb-1996'},
          {'Id': '19','First-name' : "shubham",'Last-name' : "bhatt", 'E-mail' : "gupta@ymail.com",'DOB' : '04-jun-1998'},
          {'Id': '17','First-name' : "papu",'Last-name' : "kumar", 'E-mail' : "kumar@ymail.com",'DOB' : '04-feb-1999'},
          {'Id': '18','First-name' : "vidhi",'Last-name' : "pathak", 'E-mail' : "pathak@ymail.com",'DOB' : '04-feb-1995'},
          {'Id': '20','First-name' : "vidyia",'Last-name' : "kumari", 'E-mail' : "kumari@ymail.com",'DOB' : '04-feb-1996'}];
      
          setarray(param){
          param = this.array;
          }
          getarray(){
            return this.array;
          }
          getcolumn(){
            return Object.keys(this.array[0]);
          }

        }
