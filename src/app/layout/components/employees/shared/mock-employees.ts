import { Employee } from "./employee.model";

export const EMPLOYEES: Employee[] = [
    {id: 0, pID: 1234, name:"John Doe", department: "P10-1", tSystem: "flex", flex:"+10:23", azk:"00:00", zerolimit:"12", status:"anwesend"},
    {id: 1, pID: 451, name:"Lorem Iypsum-Sid", department: "P12-3", tSystem: "flex", flex:"-02:33", azk:"+01:42", zerolimit:"74", status:"krank"},
    {id: 2, pID: 19485, name:"Max Mustermann", department: "L2-3", tSystem: "flex", flex:"-22:12", azk:"-02:11", zerolimit:"-3", status:"pause"},
    {id: 3, pID: 194, name:"Lily Doe-Kid", department: "L1-22", tSystem: "flex", flex:"+08:57", azk:"+231:28", zerolimit:"-120", status:"außendienst"},
    {id: 4, pID: 81941, name:"Nameton Names", department: "P10-1", tSystem: "flex", flex:"+00:19", azk:"00:00", zerolimit:"45", status:"anwesend"}, 
]