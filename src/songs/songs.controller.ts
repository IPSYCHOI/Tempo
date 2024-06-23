import { Controller, Delete, Put,Get, Post, Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    getAllSongs() {
        return this.songsService.findAllSongs();
        // try {
            
        // } catch (e) {
        //  throw new HttpException("server error",HttpStatus.INTERNAL_SERVER_ERROR)  
        // }
    }
    @Get(':id')
    getOneSong(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))  id: number) {
        
        return `${typeof id }`;
        //return this.songsService.findOneSong();
    }
    @Put(":id")
    updateOneSong() {
        return 'update one song';
    }
    @Delete(':id')
    deleteOneSong() {
        return 'delete one song';
    }
    @Post()
    createOneSong(@Body() CreateSongDTO: CreateSongDTO) {
        return this.songsService.createSong(CreateSongDTO);
    }
}
