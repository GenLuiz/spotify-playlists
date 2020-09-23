import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PLAYLISTS } from '../mock-playlist';
import { PlaylistService} from '../playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = Playlist[];
  selectedPlaylist: Playlist;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  onSelect(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
  }

  getPlaylists(): void{
    this.playlists = this.playlistService.getPlaylists().subscribe (this.playlists => this.playlists = this.playlists);
  }

}
