using CodingChallenge.Models;
using CodingChallenge.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Threading.Tasks;

namespace CodingChallenge.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _repository;
        private readonly ILogger<HomeController> _logger;

        public HomeController(IProductRepository repository, ILogger<HomeController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            var tempId = 1;
            var model = await _repository.GetById(tempId);

            return View(model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
