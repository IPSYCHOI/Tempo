import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
     arr=[]
    createSong(song) {
        return song
    }
    findAllSongs() {
        return this.arr
    }
    findOneSong() {
        return 'one song';
    }
}
