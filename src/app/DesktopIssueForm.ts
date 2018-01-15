export class desktopIssueForm {

  asset: string;
  username: string;
  entity: string;// desktop or laptop or printer
  problem: string; // not working, blinking, displaying, 
  priority: string;
  severity: string;
  shortDescription : string;
  longDescription: string;
  longDescReqd : string;
  intent: string;
  action: string;
  success : string;
  ticketNo: string;
  submitted : string;


  constructor(inasset: string, inusername: string, inentity: string, inproblem: string, inpriority: string,
    insevierity: string, inintent: string, inlongDescription: string,inshortDescription: string, inlongDescReqd : string,
     inaction: string) {
    this.asset = inasset;
    this.username = inusername;
    this.entity = inentity;
    this.problem = inproblem;
    this.priority = inpriority;
    this.severity = insevierity;
    this.longDescription = inlongDescription;
    this.shortDescription = inshortDescription;
    this.longDescReqd = inlongDescReqd;
    this.intent = inintent;
    this.action = inaction;
    this.success = null;
    this.ticketNo = null;
    this.submitted = null;
  }
}
