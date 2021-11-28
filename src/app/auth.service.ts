import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const apiKey = 'coinrankingcb506723382cd33f0d1dd3d7eddbb97baf643b7c9ca4f219'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'X-My-custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.coinranking.com/v2'
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  constructor() { }
}
