import { IsString, IsInt, IsNotEmpty, IsArray, Min, ArrayMinSize } from "class-validator";
export class CreateAlunoDto{
    @IsNotEmpty({
        message:'o nome é obrigatório e não pode ser vazio.'
    })
    nome:string;
    @IsInt({
        message: 'A idade deve ser um número inteiro'
    })
    @Min(0,{
        message:'A idade não poder ser negativa.'
    })
    idade:number;


    @IsString()
    @IsNotEmpty({
        message:'A matrícula é obrigatória e não pode ser vazia.'
    })
    matricula:string;
    @IsArray()
    @IsString({
        each: true,
        message:'Cada curso deve ser um texto.'
    })
    @ArrayMinSize(1,{
        message:'O aluno dever estar matriculado em pelo menos um curso.'
    })

    cursos:string[];
}