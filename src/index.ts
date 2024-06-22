import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from './app.module';

const expressServer = express();

const createFunction = async (expressInstance: express.Express): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  await app.init();
};

// Start the server
createFunction(expressServer).then(() => {
  expressServer.listen(3000, () => {
    console.log('NestJS app is running on port 3000');
  });
});
