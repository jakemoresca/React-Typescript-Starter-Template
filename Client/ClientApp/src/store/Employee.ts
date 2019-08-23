import { Dispatch as ReduxDispatch, Action, Reducer } from "redux";

type Dispatch = ReduxDispatch<Action<any>>;

enum ActionTypes
{
    REQUEST_EMPLOYEE_LIST = "REQUEST_EMPLOYEE_LIST",
    RECEIVE_EMPLOYEE_LIST = "RECEIVE_EMPLOYEE_LIST"
}

interface IActions
{
    REQUEST_EMPLOYEE_LIST: { type: ActionTypes.REQUEST_EMPLOYEE_LIST };
    RECEIVE_EMPLOYEE_LIST: { type: ActionTypes.RECEIVE_EMPLOYEE_LIST, employeeList: Employee[] }
}

export type IAction = IActions[keyof IActions];

export interface EmployeeState
{
    employeeList: Employee[];
    isFetching: boolean;
}

export interface Employee
{
    firstName: string;
    lastName: string;
    age: number;
}

export const requestEmployeeList = () => async (dispatch: Dispatch) =>
{
    dispatch({ type: ActionTypes.REQUEST_EMPLOYEE_LIST });

    let response = await fetch("/api/Employees");
    let employeeList = await response.json();

    dispatch({ type: ActionTypes.RECEIVE_EMPLOYEE_LIST, employeeList: employeeList });
}

const initialState: EmployeeState = { employeeList: [], isFetching: false };

export const reducer: Reducer<EmployeeState> = (state: EmployeeState | undefined, action: IAction): EmployeeState =>
{
    if (state === undefined)
        return initialState;

    switch (action.type)
    {
        case ActionTypes.REQUEST_EMPLOYEE_LIST:
            return {
                ...state,
                isFetching: true
            };

        case ActionTypes.RECEIVE_EMPLOYEE_LIST:
            return {
                ...state,
                employeeList: action.employeeList
            };
    }

    return state;
}