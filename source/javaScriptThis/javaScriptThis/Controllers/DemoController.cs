using System.Web.Mvc;

namespace javaScriptThis.Controllers
{
    public class DemoController : Controller
    {
        // GET: Demo
        public ActionResult AsAFunction()
        {
            return View();
        }

        public ActionResult AsAMethod()
        {
            return View();
        }

        public ActionResult AsAConstructor()
        {
            return View();
        }

        public ActionResult TopLevel()
        {
            return View();
        }

        public ActionResult Call()
        {
            return View();
        }

        public ActionResult Apply()
        {
            return View();
        }

        public ActionResult Bind()
        {
            return View();
        }
    }
}