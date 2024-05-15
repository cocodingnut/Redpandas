import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { randomUUID } from 'crypto';

@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Post()
  create(@Body() body) {
    if (!this.validatorChirrup(body)) {
      throw new HttpException(
        'body data incomplete.',
        HttpStatus.BAD_REQUEST
      )
    }
    const chirrup = {
      _id: randomUUID().toString(),
      ...body
    };
    this.newsService.createTemp(chirrup);
    return chirrup;
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const story = this.newsService.findOne(id);
    if (!story) {
      throw new HttpException(
        'Story not found.',
        HttpStatus.NOT_FOUND
      )
    }
    return story;
  }

  @Patch('addComment/:id')
  update(@Param('id') id: string, @Body() body) {
    const comment = {
      ...body,
      _id: randomUUID().toString()
    }
    return this.newsService.updateComment(id, comment);
  }

  // TODO: Delete requests
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.newsService.remove(+id);
  // }

  validatorChirrup(body: any): boolean {
    return body.publisherName;
  }
}
