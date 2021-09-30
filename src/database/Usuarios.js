import React,{useContext} from 'react';
import db from './Database';
import firebase from 'firebase';


export default class Usuarios{
  constructor(){
    console.log(db.getDb())
    this.usuarios = db.getDb().collection('usuarios');
    this.addUsuario = this.addUsuario.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getByCpf = this.getByCpf.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  addUsuario(dados){
      this.usuarios.add(dados);
  }

  async getAll(){
    let elm = [];
    await this.usuarios.get().then( (query) => {
      query.forEach( (el) => {
        elm.push(el);
      } )
    } );
  
    //this.getByCpf("1234").then( res => {
      // this.updateUser(res, {nome: "outro teste"});
    //})
    
    return elm;
  }


async getByCpf(cpf){
  let elm = null;
  await this.usuarios.where("cpf", "==", cpf).get().then( (query) => {
    query.forEach( (el) => {
      elm = el;
    } )
  } )
  
  return elm;
}
async getByEmail(email){
  let elm = null;
  await this.usuarios.where("email", "==", email).get().then( (query) => {
    query.forEach( (el) => {
      elm = el;
    } )
  } )
  
  return elm;
}
async getBySenha(senha){
  let elm = null;
  await this.usuarios.where("senha", "==", senha).get().then( (query) => {
    query.forEach( (el) => {
      elm = el;
    } )
  } )
  
  return elm;
}

 async updateUser(el, newData){
  this.usuarios.doc(el.id).update(newData);
}

}



export function addUsu(usuario){   
  db.getDb().collection('usuarios').add({  
       nome:usuario.nome,  
       endereco:usuario.endereco,
       email:usuario.email,
       cpf:usuario.cpf,
       convenio:usuario.convenio,
       celular:usuario.celular,
       senha:usuario.senha,
       nascimento:usuario.nascimento,
       plano: usuario.plano,
       numCon: usuario.numCon,
       valCon: usuario.valCon,
       especialidade: usuario.especialidade,
       sintomas: usuario.sintomas,
       sexo: usuario.sexo,
       hospital:usuario.hospital,
       imagem:usuario.imagem
       }) }


       
