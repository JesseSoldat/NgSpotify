import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
	moduleId: module.id,
	selector: 'album',
	templateUrl: 'album.component.html'
})

export class AlbumComponent {

	constructor(private spotifyService: SpotifyService, private route: ActivatedRoute){

	}

}