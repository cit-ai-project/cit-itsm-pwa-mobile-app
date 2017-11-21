export class desktopIssueForm {

  asset: String;
  username: String;
  request: String; // new or existing desktop
  priority: String;
  sevierity: String;
  description: String;


  constructor(inasset: String, inusername: String, inrequest: String, inpriority: String, insevierity: String, indescription: String) {
    this.asset = inasset;
    this.username = inusername;
    this.request = inrequest;
    this.priority = inpriority;
    this.sevierity = insevierity;
    this.description = indescription;
  }
}
