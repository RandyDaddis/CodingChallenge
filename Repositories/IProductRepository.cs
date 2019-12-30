using CodingChallenge.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodingChallenge.Repositories
{
    public interface IProductRepository
    {
        Task<ProductDto> GetById(int id);
        Task<List<ProductDto>> GetList();
    }
}