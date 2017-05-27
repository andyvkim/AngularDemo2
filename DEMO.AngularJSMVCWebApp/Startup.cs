using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DEMO.AngularJSMVCWebApp.Startup))]
namespace DEMO.AngularJSMVCWebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
