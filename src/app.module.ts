import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, BooksModule, AuthModule, DatabaseModule, MiddlewareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
