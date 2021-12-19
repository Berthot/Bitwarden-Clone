import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./Entities/user.entity";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "bertho",
      password: "idkfa123",
      database: "bitwarden",
      entities: [User],
      synchronize: true
    })],
  controllers: [],
  providers: []
})
export class AppModule {
}
