import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  //Destinado a injeção de dependência
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
  }

}
