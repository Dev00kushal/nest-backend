import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song-dto';
import { UpdateSongDto } from './dto/update-song-dto';
import { Song } from './songs.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepo: Repository<Song>,
  ) {}
  
   create(songDto: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = songDto.title;
    song.artists = songDto.artist;
    song.duration = songDto.duration;
    song.lyrics = songDto.lyrics;
    song.releaseDate = songDto.releasedDate;

    return  this.songsRepo.save(song);
  }

  findAll(): Promise<Song[]>{
    return this.songsRepo.find();
  }


  findOne(id:number): Promise<Song>{
    return this.songsRepo.findOneBy({id});
  }

  async remove(id:number):Promise<void>{
     await this.songsRepo.delete(id);
  }
  
  async update(id : number,dto:UpdateSongDto) : Promise<void> {
    await this.songsRepo.update(id,dto);
  }

}

