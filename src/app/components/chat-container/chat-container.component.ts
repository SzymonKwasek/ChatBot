import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResponseService, Message } from 'src/app/services/response.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';


@Component({
	selector: 'app-chat-container',
	templateUrl: './chat-container.component.html',
	styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

	@ViewChild('scrollable') private scrollContainer: ElementRef;
	@ViewChild('box') private input: ElementRef;

	messages: Observable<Message[]>;

	url = 'https://zeus.stanusch.com/player-kafelkowy/mvc/json/stanusch_new';
	temp_url="assets/bot.json"

	constructor(private responseService: ResponseService) {	}

	ngOnInit() {
		this.messages = this.responseService.conversation.asObservable()
		.pipe(
			scan((acc, val) => [...acc, ...val])
		);
	}

	ngAfterViewChecked() {        
        this.scrollToBottom();
    } 

	onEnter(message: string) {
		this.input.nativeElement.value = null;
		this.scrollToBottom();
		if (message.length > 0) {
			this.responseService.getResponse(message, this.temp_url);
		}
	}

	scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }	
}
