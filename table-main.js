var ViewModel = function(first, last) {
    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this.age = ko.observable();
    this.fullName = ko.computed(function(){
    	return this.firstName() + " " + this.lastName();
    },this);
};
 
ko.applyBindings(new ViewModel()); 
