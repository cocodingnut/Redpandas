import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chirrup, Comment } from '../../../../core/models/chirrup';
import { ChirrupService } from '../../services/chirrup.service';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-chirrup-list',
  templateUrl: './chirrup-list.component.html',
  styleUrls: ['./chirrup-list.component.sass']
})
export class ChirrupListComponent implements OnInit, OnDestroy {
  news: Chirrup[] = [];
  newCommentTexts: { [chirrupId: string]: string } = {};
  user: Profile | undefined;
  private refreshSubscription = new Subscription();

  constructor(
    private chirrupService: ChirrupService,
  ) { this.refreshSubscription = new Subscription(); }

  ngOnInit() {
    this.chirrupService.loadChirrups();
    this.refreshSubscription.add(this.chirrupService.news.subscribe(news => {
      this.news = news;
      this.news.forEach(chirrup => {
        this.newCommentTexts[chirrup._id] = '';
      });
    }));
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }


  toggleHeartIcon(chirrup: Chirrup) {
    chirrup.islike = !chirrup.islike;
    // 因为post service更改了model, 导致这里要handle chirrup._id undefined 的情况,实际上不会有不存在_id的post
    // if current user likes the post, the username is added to the likedIdList
    if (chirrup && chirrup.islike) {
      const likedId = {
          userId: this.user?._id || "", // Ensure it's a string or provide a default value
          _id: chirrup._id || "" // Ensure it's a string or provide a default value
      };
      chirrup.likedIdList.push(likedId);
    }
    // if current user cancel the like, the username is removed from the likedIdList
    else if (chirrup && !chirrup.islike && chirrup.likedIdList){
      const likedId = {
        userId: this.user?._id || "", // Ensure it's a string or provide a default value
        _id: chirrup._id || "" // Ensure it's a string or provide a default value
      };


      chirrup.likedIdList = chirrup.likedIdList.filter(likedId => likedId.userId !== (this.user?._id || ""))
    }

    if (chirrup._id !== undefined) {
      localStorage.setItem(chirrup._id, chirrup.islike.toString());
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  toggleCommentIcon(chirrup: Chirrup) {
    chirrup.showComments = !chirrup.showComments;
  }
  onSubmit(chirrup: Chirrup) {
    const currName = localStorage.getItem('userName');
    const newComment: Comment = {
      _id: '', // This will be generated by the backend
      publisherName: (currName === null) ? '' : currName,
      content: {
        image: '',
        video: '',
        text: this.newCommentTexts[chirrup._id], // Use the bound property for the comment content
        _id: ''
      },
      publishedTime: new Date().toISOString()
    };

    this.chirrupService.addComment(chirrup._id, newComment).subscribe({
      next: _resp => {
        this.newCommentTexts[chirrup._id] = '';  // Clear the input field after adding the comment
        alert("You have successfully added a new comment!");
      },
      error: (_err: any) => console.log("Error posing new comment:", _err)
    });
  }
}
