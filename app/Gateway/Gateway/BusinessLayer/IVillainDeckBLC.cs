using System.Threading.Tasks;

namespace Gateway
{
    public interface IVillainDeckBLC
    {
        Task<VillainDeck> GetVillainDeck(Filter filter);
    }
}