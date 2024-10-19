import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService:SongsService){}

    @Get()
  findAll() {
   return  this.songsService.findAll();
  }

  @Post()
   create(){
    return this.songsService.create('Eminem Rap God')
   }
   
  @Get(":id")
  findOne() {
    return 'return one songs based on the id'
  }

  @Put(":id")
  update(){
    return "update a song based on the id"
  }

  @Delete(":id")
  delete(){
    return "delete the song based on the id "
  }

}
