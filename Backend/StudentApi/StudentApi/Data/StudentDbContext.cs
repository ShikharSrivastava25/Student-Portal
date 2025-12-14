using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StudentApi.Models;
using System.Transactions;

namespace StudentApi.Data
{
    public class StudentDbContext : IdentityDbContext<ApplicationUser>
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }
        public DbSet<Student> Students => Set<Student>();
    }
}
