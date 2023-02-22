// import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { Module } from "@nestjs/common";

@Module({
    imports:[UserModule],
    
})
export class AppModule{

}