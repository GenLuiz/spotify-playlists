import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PLAYLISTS } from '../mock-playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = PLAYLISTS;
  selectedPlaylist: Playlist;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
  }

}
