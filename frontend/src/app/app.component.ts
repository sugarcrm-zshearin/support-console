import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import {ROUTER_CONFIGURATION, OpenAIApi} from "openai";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontend';
  // TODO: 
  apiKey = 'api-key';

  // configuration = new ROUTER_CONFIGURATION({
  //   organization: "org-I7LrY62mlqQycybdCEh0EZ9V",
  //   apiKey: this.apiKey,      
  // });

  // openaiAPI  = new OpenAIApi(this.configuration);

  // apiUrl = 'https://api.openai.com/v1';

    apiUrl = 'https://api.openai.com/v1/chat/completions';

    
    
  constructor(private http: HttpClient) {

    // const configuration = new ROUTER_CONFIGURATION({
    //   organization: "org-I7LrY62mlqQycybdCEh0EZ9V",
    //   apiKey: this.apiKey,      
    // });
    // this.openai = new OpenAIApi(configuration);


  }


  sendARequestToChatGPT(): void {

    // console.log()

    // this.openaiAPI.listEngines();
    let initialQuery = "How does SAML work?";
    let myMessages = [{"role": "user", "content": initialQuery }];
    this.http.post(this.apiUrl, {
      messages: myMessages,
      // model: 'gpt-3.5-turbo-0613',
      model: "ft:gpt-3.5-turbo-0613:sugarcrm::8AKbLreq",
      max_tokens: 1000,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    }).subscribe((response: any) => {
      console.log(response);
    }); 
  }

}
