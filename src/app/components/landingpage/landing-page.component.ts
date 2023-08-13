import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../questioncard/card/card.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  data = [
  {
  "question": "What is Netflix?",
  "answer": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
  "question": "How much does Netflix cost?",
  "answer": "Netflix has three plans: Basic, Standard, and Premium. The Basic plan costs \$9.99 per month, the Standard plan costs \$15.99 per month, and the Premium plan costs \$19.99 per month. The different plans offer different features, such as the number of devices you can watch on at the same time and the quality of video you can stream."
  },
  {
  "question": "Where can I watch?",
  "answer": "You can watch Netflix in over 190 countries. You can also watch Netflix on your TV, computer, phone, or tablet. Netflix is compatible with most devices."
  },
  {
  "question": "How do I cancel?",
  "answer": "You can cancel your Netflix account online or by calling customer service. To cancel online, go to your Netflix account settings and click on Cancel Membership. To cancel by phone, call 1-800-585-7290."
  },
  {
  "question": "What can I watch on Netflix?",
  "answer": "Netflix has a wide variety of TV shows, movies, anime, documentaries, and more. You can find popular TV shows like Stranger Things, The Crown, and The Witcher. You can also find movies like The Irishman, The Shawshank Redemption, and Pulp Fiction. Netflix also has a large selection of anime and documentaries. There is something for everyone on Netflix."
  },
  {
  "question": "Is Netflix good for kids?",
  "answer": "Yes, Netflix is a great streaming service for kids. Netflix has a large selection of kid-friendly TV shows and movies, including shows like Cocomelon, Sesame Street, and Paw Patrol. Netflix also has parental controls that allow you to restrict what your kids can watch. This makes Netflix a safe and enjoyable streaming service for kids."
  }
  ]

}
