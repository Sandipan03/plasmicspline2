import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Robot from "./components/Robot"
import Model2 from "./components/Model2"
import Model3 from "./components/Model3"
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "29EFvEcM4xcTRT2ykora3Y",
      token: "vXiH2Yoe4xqg8FSUgGiJtVBWMSIdeyTom8EU7WujAn2BVe5BUae1cjqGOYrws3IWGd26uK9qciwKO0L9pBlA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Robot,{
  name: "Robot",
  props: {}
});
PLASMIC.registerComponent(Model2,{
  name: "Model2",
  props: {}
});
PLASMIC.registerComponent(Model3,{
  name: "Model3",
  props: {}
});
