import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { PLAYLISTS } from './mock-playlist';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  getPlaylists(): Observable<Playlist[]> {
    return of (PLAYLISTS);
  }

  constructor() { }
}
