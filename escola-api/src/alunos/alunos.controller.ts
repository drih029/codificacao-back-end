import { Controller, Get, Post, Body, Param, Patch, Delete} from "@nestjs/common";
import { AlunoService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";

@Controller('alunos')
export class AlunosController{
    constructor (private readonly alunoservice: AlunoService){}
    @Post()
    create(@Body() CreateAlunoDto:CreateAlunoDto){
        return this.alunoservice.create(CreateAlunoDto);
    }
    @Get()
    findAll(){
        return this.alunoservice.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.alunoservice.findOne(id);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateAlunoDto:UpdateAlunoDto){
        return this.alunoservice.Update(id, UpdateAlunoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.alunoservice.remove(id);
    }
}