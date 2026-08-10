import { buildApp } from "./app.js";
import { settings } from "./config.js";

const app = await buildApp();

const shutdown = async (signal: string): Promise<void> => {
  app.log.info({ signal }, "正在关闭 Fastify 服务");
  await app.close();
  process.exit(0);
};

process.once("SIGINT", () => { void shutdown("SIGINT"); });
process.once("SIGTERM", () => { void shutdown("SIGTERM"); });

try {
  await app.listen({ host: settings.host, port: settings.port });
  app.log.info(`Fastify API listening on http://${settings.host}:${settings.port}`);
} catch (error) {
  app.log.error(error);
  await app.close();
  process.exit(1);
}

