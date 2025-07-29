namespace MineWebApi.Models
{
    public class SuperHeroes
    {
        public required string id { get; set; }
        public required string name { get; set; }
        public string? description { get; set; }
        public string? type { get; set; }
        public int level { get; set; }
    }
}
