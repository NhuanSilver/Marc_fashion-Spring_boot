import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {ApiPath} from "../model/Enum/ApiPath";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  api_upload_image_url = environment.api_url + ApiPath.IMAGE;
  constructor(private http : HttpClient) { }
  public upload(data : FormData) : Observable<string[]> {
    return this.http.post<string[]>(this.api_upload_image_url +"/upload", data);
  }

}
