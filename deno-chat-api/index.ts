import { Application, Router  } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

interface message  {
    user: string,
    message: string
}

const messages:message [] = [] ;
messages.push({
  user: "arthur",
  message: 'blablablab'
});

const router = new Router();
router
  .get("/", (context):void => {
    context.response.body = "chat server";
  })
  .get("/messages", (context):void => {
    context.response.body = messages;
  })
  .post("/messages", async (context):Promise<void> => {
    const newMessage = await context.request.body().value;
    messages.push(newMessage);
    context.response.body = messages;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler())
//denodeploy: https://dash.deno.com/projects