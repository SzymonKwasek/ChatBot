import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
	selector: 'app-chat-container',
	templateUrl: './chat-container.component.html',
	styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

	messages = [
		{ type: 'bot', message: 'Witaj, w czym mogę Ci pomóc ?' },
		{ type: 'bot', message: 'Zadaj pytanie' },
		{ type: 'user', message: 'Pytanko' },
		{ type: 'bot', message: 'Zadaj pytanie' },
		{ type: 'bot', message: 'Zadaj pytanie' },
	]

	responses = {};
	error;
	url = 'https://zeus.stanusch.com/player-kafelkowy/mvc/json/stanusch_new'

	constructor(private responseService: ResponseService) {
		
	}

	ngOnInit() {
		this.responseService.getResponse(this.url).subscribe(
			(res) => this.responses = {...res},
			error => this.error = error);
	}

	onClick() {
		console.log(this.responses)
	}

}
