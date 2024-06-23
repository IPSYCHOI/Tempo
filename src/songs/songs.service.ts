import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
     arr=[5]
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
