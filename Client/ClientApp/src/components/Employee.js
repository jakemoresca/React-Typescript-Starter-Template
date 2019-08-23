"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var Employee_1 = require("../store/Employee");
var EmployeeComponent = function (_a) {
    var employeeList = _a.employeeList, requestEmployeeList = _a.requestEmployeeList;
    return (React.createElement("div", null,
        React.createElement("button", { onClick: requestEmployeeList, className: "button" }, "Request"),
        React.createElement("table", { className: "table" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "First Name"),
                    React.createElement("th", null, "Last Name"),
                    React.createElement("th", null, "Age"))),
            React.createElement("tbody", null, employeeList.map(function (employee, i) {
                return React.createElement("tr", { key: i },
                    React.createElement("td", null, employee.firstName),
                    React.createElement("td", null, employee.lastName),
                    React.createElement("td", null, employee.age));
            })))));
};
var bindStateToProps = function (state) {
    var employeeList = state.employee === undefined ? [] : state.employee.employeeList;
    return {
        employeeList: employeeList
    };
};
var bindDispatchToProps = function (dispatch) { return redux_1.bindActionCreators({
    requestEmployeeList: Employee_1.requestEmployeeList
}, dispatch); };
exports.ConnectedEmployeeComponent = react_redux_1.connect(bindStateToProps, bindDispatchToProps)(EmployeeComponent);
//# sourceMappingURL=Employee.js.map