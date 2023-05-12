import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  //Destinado a injeção de dependência
  constructor(
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
    
    ) { }
  
  ngOnInit(): void {
    
    const userName = this.activatedRoute.snapshot.params.userName;
    this.PhotoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos)
  }

}
