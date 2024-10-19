import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get(':id')
  findOne() {
    return 'return one song based on the id';
  }

  @Put(':id')
  update() {
    return 'update a song based on the id';
  }

  @Delete(':id')
  delete() {
    return 'delete the song based on the id ';
  }
}
