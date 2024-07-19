﻿namespace EmpMgmt_PulseSolution.Models
{
    public class Employee
    {
        public int EmployeeId{ get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Department { get; set; }
        public DateTime HireDate { get; set; }
    }
}
