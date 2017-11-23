export class desktopIssueForm {

  asset: string;
  username: string;
  entity: string;// desktop or laptop or printer
  problem: string; // not working, blinking, displaying, 
  priority: string;
  sevierity: string;
  description: string;
  intent: string;
  action: string;


  constructor(inasset: string, inusername: string, inentity: string, inproblem: string, inpriority: string,
    insevierity: string, inintent: string, indescription: string, inaction: string) {
    this.asset = inasset;
    this.username = inusername;
    this.entity = inentity;
    this.problem = inproblem;
    this.priority = inpriority;
    this.sevierity = insevierity;
    this.description = indescription;
    this.intent = inintent;
    this.action = inaction;
  }
}
