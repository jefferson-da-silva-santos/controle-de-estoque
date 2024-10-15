import Users from "../repository/Users.js";

async function buscar() {
  try {
    const resu = await Users.searchUser('TESTE_USUARIO', 'TESTE_SENHA'); //usuarios da busca
    if (resu) {
      console.log('Usuário encontrado');
      return;
    }
    console.log('Usuário não encontrado');
    
  } catch (error) {
    console.log(`Erro na busca: ${error.message}`);
  }
}

buscar();