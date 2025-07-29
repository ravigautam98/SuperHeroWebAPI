namespace MineWebApi.Data
{
    using Microsoft.EntityFrameworkCore;
    using MineWebApi.Models;

    public class SuperHeroesDbContext : DbContext
    {
        public SuperHeroesDbContext(DbContextOptions<SuperHeroesDbContext> options) : base(options) { }

        public DbSet<SuperHeroes> superHeroes { get; set; }
        public DbSet<Villains> Villains { get; set; }
    }
}
