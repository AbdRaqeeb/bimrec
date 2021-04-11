import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
process.on('unhandledRejection', function (reason, p) {
  console.log('This is the Unhandled Rejection: ', reason, p);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: true,
  });
  await app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
    );
  });
}
bootstrap();
