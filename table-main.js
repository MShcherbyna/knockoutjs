var ViewModel = function(first, last) {

    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this.age = ko.observable();
    this.sex = ko.observable();
    this.isAdmin = ko.observable(false);
    this.adminName = ko.observable("");
    this.sexOptions = ['male','famale'];
    
    this.fullName = ko.computed(function(){
    	return this.firstName() + " " + this.lastName();
    },this);
    
    this.notEmpty = ko.computed(function(){
    	return !!this.firstName() || !!this.lastName() || !!this.sex() || !!this.age() || !!this.isAdmin();
    },this);	
};
 
ko.applyBindings(new ViewModel()); 
