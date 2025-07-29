using Microsoft.AspNetCore.Mvc;
using MineWebApi.Data;
using MineWebApi.Models;

namespace MineWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroesController : ControllerBase
    {
        private readonly SuperHeroesDbContext superHeroesDbContext;

        public SuperHeroesController(SuperHeroesDbContext superHeroesDbContext)
        {
            this.superHeroesDbContext = superHeroesDbContext;
        }

        [HttpGet("superheroes")]
        public ActionResult getSuperHeroList()
        {
            var list = superHeroesDbContext.superHeroes.ToList();
            return Ok(list);
        }

        [HttpGet("Villains")]
        public ActionResult getVillainList()
        {
            var list = superHeroesDbContext.Villains.ToList();
            return Ok(list);
        }

        [HttpPost]

        public IActionResult postSuperHeroList(SuperHeroes superHeroes)
        {
            superHeroesDbContext.superHeroes.Add(superHeroes); 
            superHeroesDbContext.SaveChanges();              
            return Ok(superHeroes);                            
        }

        [HttpPut]
        public IActionResult updateSuperHeroById(string id, SuperHeroes superHeroes)
        {
            var hero = superHeroesDbContext.superHeroes.Find(id);

            if(hero is null)
            {
                return NotFound();
            }

            hero.type = superHeroes.type;
            hero.id = id;
            hero.name = superHeroes.name;
            hero.description = superHeroes.description;
            hero.level = superHeroes.level;

            superHeroesDbContext.SaveChanges();

            return Ok();
        }
    }
}
