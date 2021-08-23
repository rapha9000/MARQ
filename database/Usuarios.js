import db from './Database';

export default class Usuarios{
  constructor(){
    console.log(db.getDb())
    this.usuarios = db.getDb().collection('usuarios');
    this.addUsuario = this.addUsuario.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  addUsuario(dados){
      this.usuarios.add(dados);
  }

  async getAll(){
    let elm = [];
    await this.usuarios.get().then( (query) => {
      query.forEach( (el) => {
        elm.push(el.data());
      } )
    } )
    
    return elm;
  }
}

