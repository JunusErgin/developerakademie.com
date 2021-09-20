import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  constructor() { }

  maxWidth(width){
    return window.innerWidth <= width;
  }

  minWidth(width){
    return window.innerWidth >= width;
  }
}
