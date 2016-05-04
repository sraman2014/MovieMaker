
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MovieMaker.Models;
using System;

namespace MovieMaker.Controllers
{
    public class ClipController : ApiController
    {
        readonly private MovMkrEntities1 db = new MovMkrEntities1();

         [HttpGet]
        public IEnumerable<Clip> GetAll()
        {
            return db.Clips;
        }

        [HttpPost]
        public string Create(Clip item)
        {
            if (item == null)
            {
                return "Clip Record was Invalid";
            }
            db.Clips.Add(item);
            db.SaveChanges();
            return "";
        }


 



        [HttpPut]
        public string Update(Clip item)
        {
            try {
                if (item == null)
                {
                    return "Clip Record is Invalid";
                }

                //Clip c = db.Clips.FirstOrDefault(cl=> cl.ID == item.ID);

                //c.ClipName = item.ClipName ;
                //c.MediaID = item.MediaID;
                //c.StartPosition= item.StartPosition;
                //c.Duration = item.Duration ;
                string msg = "";
                db.Clips.Attach(item);
                msg = "1";
                db.SaveChanges();
                msg = "1";
                return msg;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            
        }


        [HttpDelete]
        public string Delete(int id)
        {
            Clip Item = db.Clips.FirstOrDefault(vf => vf.ID == id);
            if (Item == null)
            {
                return "Video File Record was not found";
            }
            db.Clips.Remove(Item);
            db.SaveChanges();
            return "";
        }
    }
}