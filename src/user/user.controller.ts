import {  UserDto } from './../user.dto';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import path from 'path';

@Controller('users')
export class UserController{
@Get()
getAllUser(){
    return [{
        name:"khoa",
        age:18
    },{
        name: "binh",
        age:18
    }]
}
@Post()
createUser( @Body() user:UserDto):UserDto{
return {
    username:"test",
    password:"test"
}
}

@Get(':id')
getUserById(@Param("id") id: number){
console.log(id);
return "test"

}
}