var ViewModel = function(first, last) {

    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this.age = ko.observable();
    this.sex = ko.observable();
    this.isAdmin = ko.observable(false);
    this.adminName = ko.observable("");
    this.sexOptions = ['male','famale'];
    this.users = [];
    
    this.fullName = ko.computed(function(){
    	return this.firstName() + " " + this.lastName();
    },this);
    
    this.notEmpty = ko.computed(function(){
    	return !!this.firstName() || !!this.lastName() || !!this.sex() || !!this.age() || !!this.isAdmin();
    },this);	
    this.reset = function() {
        this.firstName('');
        this.lastName('');
        this.age(null);
        this.sex(null);
        this.isAdmin(false);
        this.adminName("");
    },
    this.save = function() {
        event.preventDefault();
        if(this.notEmpty) {
            var userInfo = {};
            userInfo['fullname'] = this.fullName();
            userInfo['age'] = this.age();
            userInfo['sex'] = this.sex();
            userInfo['isAdmin'] = this.isAdmin() ? this.adminName() : 'Not admin';

            this.users.push(userInfo);

            console.log(this.users);
            this.reset();
        }
    }
};
 
ko.applyBindings(new ViewModel()); 
