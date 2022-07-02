import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://redis-19504.c299.asia-northeast1-1.gce.cloud.redislabs.com:19504',
          password : 'JXT7Tb4RrymslSLgCKvkiVhaXM6qoFip'
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
