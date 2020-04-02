import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote'

@Injectable({
  providedIn: 'root'
})
export class ExtractQuoteService {

  quote : Quote;
  public linkToQuotes = "http://quotes.stormconsultancy.co.uk/random.json"

  constructor(public quoteLink : HttpClient) {
    this.quote = new Quote ("", "");
   }

  extractQuote(){

    interface QuoteShow{
      quoteAuthor : string;
      actQuote : string;
    }

    let ahidi = new Promise ((resolve, reject) => 
      this.quoteLink.get<QuoteShow>(this.linkToQuotes).toPromise().then(
        datum => {
          this.quote.author = datum.quoteAuthor;
          this.quote.quote = datum.actQuote;

          resolve()
        },
        err => {
          this.quote.author = "DhosioHoes";
          this.quote.quote = "They all my hoes! Bitch!";

          reject(err);
        }

      ))
      return ahidi;
  }
}
