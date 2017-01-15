import { Component } from '@angular/core';
import { Artist } from '../../../Artist';
import { SpotifyService } from '../../services/spotify.service';

@Component ({
	moduleId: module.id,
	selector: 'search',
	templateUrl: 'search.component.html',
	providers: [SpotifyService]
})

export class SearchComponent {
	searchStr: string;
	searchRes: Artist[];

	constructor(private spotifyService: SpotifyService){
		
	}

	searchMusic(){
		this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
			// console.log(res);
			this.searchRes = res.artists.items;
		})
	}
}