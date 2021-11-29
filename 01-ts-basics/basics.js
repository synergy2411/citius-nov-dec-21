// Type Inference
// let str : string = "Some String";
// console.log(typeof(str))
var Course = /** @class */ (function () {
    function Course(id) {
        this.id = id;
    }
    Course.prototype.getId = function () {
        return this.id;
    };
    return Course;
}());
var react = new Course('123');
var angular = new Course(456);
var vue = new Course(true);
// enum
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "abc";
    ROLE[ROLE["USER"] = 3] = "USER";
    ROLE[ROLE["EMPLOYEE"] = 4] = "EMPLOYEE";
})(ROLE || (ROLE = {}));
;
var Resource = /** @class */ (function () {
    function Resource(resourceType, role) {
        this.resourceType = resourceType;
        this.role = role;
    }
    Resource.prototype.display = function () {
        console.log("ROLE : ", this.role);
    };
    return Resource;
}());
new Resource(0, ROLE.ADMIN).display(); // ?
new Resource(1, ROLE.USER).display();
new Resource(2, ROLE.EMPLOYEE).display();
