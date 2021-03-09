import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photos } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos : Photos[];
  constructor(private route: ActivatedRoute, private location:Location,private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.showPhotos();
  }
  showPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumsService.showPhotos(id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }
  returnBack() {
    this.location.back();
  }
}
