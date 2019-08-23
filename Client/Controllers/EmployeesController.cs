using System.Collections.Generic;
using Client.Models;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        public IReadOnlyList<Employee> Get()
        {
            var employees = new List<Employee>
            {
                new Employee("last", "first", 1),
                new Employee("last2", "first2", 2)
            };

            return employees;
        }
    }
}