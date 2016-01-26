describe("Ticket", function(){
  it("will take in user information to return all ticket properties", function(){
    var testTicket = new Ticket("Star Wars","6:45","16");
    expect(testTicket.movieName).to.equal("Star Wars");
    expect(testTicket.movieTime).to.equal("6:45");
    expect(testTicket.personAge).to.equal("16");
  });

  it("will return the price for a ticket based on selected items", function(){
    var testTicket = new Ticket("new", "evening", "adult");
    expect(testTicket.price()).to.eq(11);
  });
});
