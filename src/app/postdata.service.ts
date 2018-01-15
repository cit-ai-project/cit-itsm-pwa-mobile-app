import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { desktopIssueForm } from './desktopIssueForm';

@Injectable()
export class PostdataService {

  constructor(private http: Http) { }

  private appUrl = 'http://localhost:1337'  //'http://192.168.60.222';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json'
  });


  getConsoleLogExecuted(): Promise<string[]> {
    return this.http.get(this.appUrl.concat("/api/helpdesk"))
      .toPromise()
      .then(response => response.json().data as string[])
      .catch(this.handleError);
  }


  getTicketCreated(desktopIssue: desktopIssueForm): Promise<desktopIssueForm> {
    console.log("JSON stringfy ::" + JSON.stringify(desktopIssue));
    //const url = `${this.appUrl.concat("/api/helpdesk/userTicket/")}/${desktopIssue.asset}`;
    const url = `${this.appUrl.concat("/api/helpdesk/userTicket/create?ticket_title='Monitor not working'&ticket_desc='Monitor is not switching on'&priority=1&severity=1&status=1&asset='ram-lp'&created_by='S8888'")}`;
    console.log(" URL formed >>"+ url);
    const options = new RequestOptions({
      method: RequestMethod.Post,
      headers: this.headers,
      responseType: ResponseContentType.Json,
      body: JSON.stringify(desktopIssue)
    });

    return this.http
      .post(url, JSON.stringify(desktopIssue))
      .toPromise()
      .then(response => {
          desktopIssue.success = response.json().success;
          desktopIssue.ticketNo = response.json().TicketNo;
          desktopIssue.submitted ='yes';
          return desktopIssue;
          
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}


