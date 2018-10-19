import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClassConfig {
    configUrl = 'http://localhost:8008/pharmacien/1';
    constructor(private http: HttpClient) { }
    getConfig() {
        return this.http.get(this.configUrl);
    }
}
