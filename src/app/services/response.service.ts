import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export interface Message {
	content: string,
	sentBy: string
}

@Injectable({
	providedIn: 'root'
})
export class ResponseService {

	helping_response = `Dostępne komendy to:\n
	1. Pracownicy firmy \n
	 2. Pakiet informacji dla inwestorów \n
	 3. Technologia i wdrożenie Platformy Omni-Chatbot \n
	 4. Kluczowe zasoby \n
	 5. Bezpieczeństwo i wydajność Omni-Chatbot \n
	 6. Platforma Omni-Chatbot`;
	 
	initialMessage: Message = {content: 'Witaj, porozmawiajmy !', sentBy: 'bot'};

	constructor(private http: HttpClient) { }

	conversation = new BehaviorSubject<Message[]>([this.initialMessage]);



	getResponse(message: string, url: string) {
		const msg: Message = { content: message, sentBy: 'user' };
		this.update(msg);

		this.getMessage(url).pipe(
			delay(1000),
			map((data: any) => data.externalSearchResult
				.map((res: string) => {
					return res;
				}).filter((value: any) => {
					return value.title.toLowerCase().trim() === message.toLocaleLowerCase().trim();
				})
			)).subscribe(res => {
			let response: Message;
			if(res[0] && res[0].content) {
				response = {content: res[0].content, sentBy: 'bot'};
			} else {
				response = { content: this.helping_response, sentBy: 'bot'};
			}
			this.update(response);
		});
	}

	private update(msg: Message) {
		this.conversation.next([msg]);
	}

	private getMessage(url: string) {
		return this.http.get(url);
	}
}
