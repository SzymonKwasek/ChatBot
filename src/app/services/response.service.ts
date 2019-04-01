import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
	response: string;
}

@Injectable({
	providedIn: 'root'
})
export class ResponseService {

	constructor(private http: HttpClient) { }

	getResponse(url: string): Observable<HttpResponse<Config>> {
		return this.http.get<Config>(url, {observe: 'response'});
	}
	


}
