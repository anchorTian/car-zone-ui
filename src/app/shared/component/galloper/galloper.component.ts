import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-galloper',
    templateUrl: './galloper.component.html',
    styleUrls: ['./galloper.component.scss']
})
export class GalloperComponent implements OnInit {

    images: string[] = [];
    constructor() { }

    ngOnInit() {
        this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    }

}
