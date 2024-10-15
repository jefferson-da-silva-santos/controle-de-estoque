

async function salvar() {
  try {
    const user = new Users('Jefferson', 'jeffersonss@gmail.com', 'uisuisisui', 'Admin', '', '');
    const resu = await user.saveNewUser();
    if (resu) {
      console.log('OK');
    } else {
      console.log('ERRO');
    }
  } catch (error) {
    console.log('erro');
  }
}