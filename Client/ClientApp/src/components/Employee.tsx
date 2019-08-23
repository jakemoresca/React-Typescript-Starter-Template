import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Employee, EmployeeState, requestEmployeeList } from "../store/Employee";
import { ApplicationState } from "../store";

interface StateProps
{
    employeeList: Employee[];
    
}

interface DispatchProps
{
    requestEmployeeList: () => void;
}

type IProps = StateProps & DispatchProps;

const EmployeeComponent: React.FunctionComponent<IProps> = ({ employeeList, requestEmployeeList}) =>
{
    return (
        <div>
            <button onClick={requestEmployeeList} className="button">Request</button>
            <table className="table">
                <thead>
                    <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
                </thead>
                <tbody>
                {employeeList.map((employee, i) =>
                    <tr key={i}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.age}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const bindStateToProps = (state: ApplicationState) =>
{
    let employeeList = state.employee === undefined ? [] : (state.employee as EmployeeState).employeeList;

    return {
        employeeList: employeeList
    };
}

const bindDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
{
    requestEmployeeList: requestEmployeeList
}, dispatch)

export const ConnectedEmployeeComponent = connect(bindStateToProps, bindDispatchToProps)(EmployeeComponent);