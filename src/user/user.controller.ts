import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/Update-user.dto';
import { AddUserDto } from './dto/Add-user.dto';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createUserDto: AddUserDto) {
        return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
        return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {     
        return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number){
        return await this.userService.softDeleteUser(id);
  }


  @Get('restore/:id')
  async restoreUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.restoreUser(id);
  }
}
