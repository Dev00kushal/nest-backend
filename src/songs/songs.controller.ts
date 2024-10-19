import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import { Song } from './songs.entity';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}


  @Post()
  create(@Body() createSongDto: CreateSongDto): Promise<Song> {
    return this.songsService.create(createSongDto);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    try {
      return `return one song based on the ${typeof  id}`;
      
    } catch (error) {
      throw new HttpException("BAD REQUEST",HttpStatus.NOT_ACCEPTABLE)
    }
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
