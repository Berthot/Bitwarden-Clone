import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

  constructor(private readonly userService: UserService) {  }

  @Get("/batata")
  GetUserName() {
    return {
      Name: "Roger",
      Pass: "Roger that"
    };
  }
  @Post()
  async create(@Body() userDto: any) {
    await this.userService.create(userDto);
    return await this.userService.findAll();
  }
}
