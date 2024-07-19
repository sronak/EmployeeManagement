using EmpMgmt_PulseSolution.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpMgmt_PulseSolution.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet <Employee> Employees { get; set; }
    }
}
