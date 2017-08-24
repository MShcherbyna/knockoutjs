var ViewModel = function(first, last) {

    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this.age = ko.observable();
    this.sex = ko.observable();
    this.isAdmin = ko.observable(false);
    this.adminName = ko.observable("");
    this.sexOptions = ['male','famale'];
    this.users = [];
    this.count = ko.observable(0);
    this.allUsers = ko.observable();
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
            userInfo['id'] = this.count();
            userInfo['fullName'] = this.fullName();
            userInfo['age'] = this.age();
            userInfo['sex'] = this.sex();
            userInfo['isAdmin'] = this.isAdmin() ? this.adminName() : 'Not admin';
            this.count(this.count()+1);

            this.users.push(userInfo);
            this.allUsers(this.users);
            console.log(this.users);
            console.log(this.allUsers());
            this.reset();
        }
    }
};
 
ko.applyBindings(new ViewModel()); 
