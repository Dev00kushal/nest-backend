import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

  private readonly songs = [];

  create(song: string) {
   return this.songs.push(song);
  }

  findAll(){
    return this.songs;
  }



}
