import { Agent as CFAgent, routeAgentRequest } from "agents";
import { Agent, run } from "@openai/agents";

type Env = {
  MyAgent: DurableObjectNamespace<MyAgent>;
};

export class MyAgent extends CFAgent<Env> {
  async onRequest() {
    const agent = new Agent({
      name: "Assistant",
      instructions: "You are a helpful assistant.",
    });

    const result = await run(
      agent,
      "Write a haiku about recursion in programming."
    );
    return new Response(result.finalOutput);
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return (
      (await routeAgentRequest(request, env)) ||
      new Response("Not found", { status: 404 })
    );
  },
};
