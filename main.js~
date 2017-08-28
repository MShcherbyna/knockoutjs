var ViewModel = function(first, last) {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
 
    // this.fullName = ko.pureComputed(function() {
    //     // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
    //     return this.firstName() + " " + this.lastName();
    // }, this);
};
 
ko.applyBindings(new ViewModel()); // This makes Knockout get to work
