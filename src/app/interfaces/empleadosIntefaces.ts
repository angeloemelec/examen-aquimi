export interface IEmpleados{
    status: string
    data: IDataEmpleado[]
    message: string

}

export interface IDataEmpleado{
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}