using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MovieMaker.Models;

namespace MovieMaker.Controllers
{
    public class VideoFileController : ApiController
    {
        readonly private MovMkrEntities1 db = new MovMkrEntities1();

        [HttpGet]
        public IEnumerable<VideoFile> GetAll()
        {
            return db.VideoFiles;
        }
    }
}