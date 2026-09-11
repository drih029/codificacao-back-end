import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import{formatlog} from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function salvarlogSystem(mensagemlog) {
    try {
        const pastalog = path.join(__dirname, 'logs');
        const arquivolog =path.join(pastalog, 'system.log');
        await fs.mkdir(pastalog, {recursive:true});
        const registrolog = formatlog(mensagemlog);
        await fs.appendFile(arquivolog, registrolog, 'utf8');

        console.log('log Resgistrado com sucesso!');

    }catch(erro){
        console.error('Erro ao Registra log:', erro);
    }

}
salvarlogSystem('Inicialização do servidor concluídoa!\n');
salvarlogSystem('Conexaõ com banco de dados estabelecida!\n');