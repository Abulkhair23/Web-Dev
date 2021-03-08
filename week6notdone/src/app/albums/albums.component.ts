import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import { ALBUMS } from '../fake-db';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor() { }

  ngOnInit(): void {
    this.albums = ALBUMS;
  }

}
