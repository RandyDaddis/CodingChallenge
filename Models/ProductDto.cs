using System.ComponentModel.DataAnnotations;

namespace CodingChallenge.Models
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        
        public decimal QuantityInStock { get; set; }

        [DataType(DataType.Currency)]
        public decimal RetailPrice { get; set; }

        [DataType(DataType.Currency)]
        public decimal SalePrice { get; set; }
    }
}
