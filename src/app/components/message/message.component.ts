import { Component, OnInit, Input } from '@angular/core';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  @Input()
  Type

  @Input()
  Message

  constructor() { }

  ngOnInit() {
  }

}
