import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { Chirrup, Comment } from 'src/models/chirrup';

@Injectable()
export class NewsService {
  dummyNewsList: Chirrup[] = [
    {
      _id: "664173a3eebd683df3910ec1",
      publisherName: "Felix",
      publishedTime: "2024-05-13T01:57:55.743Z",
      content: {
        text: "test",
        _id: "664173a3eebd683df3910ec2"
      },
      comment: [],
      likedIdList: []
    },
    {
      _id: "664173eb26a25ee63ca83500",
      publisherName: "Felix",
      publishedTime: "2024-05-13T01:59:07.339Z",
      content: {
        text: "test",
        _id: "664173eb26a25ee63ca83501"
      },
      comment: [
        {
          publisherName: "Felix",
          content: {
            image: "",
            video: "",
            text: "test",
            _id: "6641750826a25ee63ca83997"
          },
          _id: "6641750826a25ee63ca83996",
          publishedTime: "2024-05-13T02:03:52.694Z"
        }
      ],
      likedIdList: [],
    },
    {
      _id: "66417cf030df4151b4ff03b2",
      publisherName: "Felix",
      publishedTime: "2024-05-13T02:37:36.827Z",
      content: {
        text: "test2",
        _id: "66417cf030df4151b4ff03b3"
      },
      comment: [
        {
          publisherName: "Felix",
          content: {
            image: "",
            video: "",
            text: "comment",
            _id: "66417cf930df4151b4ff04a2"
          },
          _id: "66417cf930df4151b4ff04a1",
          publishedTime: "2024-05-13T02:37:45.983Z"
        },
        {
          publisherName: "Felix",
          content: {
            image: "",
            video: "",
            text: "test",
            _id: "6641894430df4151b4ff0a37"
          },
          _id: "6641894430df4151b4ff0a36",
          publishedTime: "2024-05-13T03:30:12.318Z"
        }
      ],
      likedIdList: [],
    }
  ]

  // create(createNewsDto: CreateNewsDto) {
  //   return 'This action adds a new news';
  // }

  createTemp(story: Chirrup) {
    this.dummyNewsList.push(story);
  }

  findAll() {
    return this.dummyNewsList;
  }

  findOne(id: string) {
    return this.dummyNewsList.find((story) => story._id === id);
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  updateComment(chirrupId: string, comment: Comment) {
    const storyToEdit = this.dummyNewsList.find((story) => story._id === chirrupId);
    if (!storyToEdit) {
      throw new HttpException(
        'Story not found.',
        HttpStatus.NOT_FOUND
      )
    }
    storyToEdit.comment.push(comment);

    return comment;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
