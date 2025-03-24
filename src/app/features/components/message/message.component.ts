import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  messages = [
    "Message 1: Lorem ipsum dolor sit amet,. Curabitur vulputate, ligula nec fermentum aliquet, ex dolor hendrerit urna, sed facilisis lorem lacus vitae justo. Integer ultricies enim vitae nunc gravidal",
    "Message 2: Sed do eiusmod tempor. Integer non libero nec velit luctus accumsan eget nec nisi. Ut aliquet eros id ante rhoncus, ac posuere eros iaculis. Proin consectetur risus  ",
    "Message 3: Sed do eiusmod tempor a. Integer non libero nec velit luctus accumsan eget nec nisi. Ut aliquet eros id ante rhoncus, ac posuere eros iaculis. Proin consectetur risus  ",
    "Message 4: Duis aute irure dolor esse cillum dolore eu fugiat nulla pariatur. Vestibulum non lectus dictum, efficitur augue sed, feugiat libero. In in lectus ut justo bibendum fermentum. C.",
    "Message 5: Excepteur sint in culpa qui officia deserunt mollit anim id est laborum. Vivamus euismod odio sed eros tincidunt, vel aliquam risus aliquet. Morbi euismod nisi quis magna conguer.",
  ];
  currentIndex = 0;

  get currentMessage(): string {
    return this.messages[this.currentIndex];
  }

  get currentMessageTitle(): string {
    return `Message ${this.currentIndex + 1} of ${this.messages.length}`;
  }

  nextMessage() {
    if (this.currentIndex < this.messages.length - 1) {
      this.currentIndex++;
    }
  }

  previousMessage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
