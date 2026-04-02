export class basepage {
  static get url() {
    return '';
  }
  //
  static visit() {
    cy.visit(this.url);
  }
}
