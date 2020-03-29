import React from 'react';
import Modal from 'react-modal';

import './Modal.css';

export default function MyModal() {

  const db = require('../Utils/db.json');
  
  let universities = []

  universities = db.map(item => {
    return (
      <option key={Math.random()}>{item.university.name}</option>
    )
  });


  let courses = []
  courses = db.map(item => {
    return (
      <option key={Math.random()}>{item.course.name}</option>
      
      )
  })

  return(
    <div>
    <span className="close">&times;</span>
    <Modal isOpen={true}>
      <h1>Adicionar bolsa</h1>
      <p>Filtre e adicione as bolsas de seu interesse.</p>

      <form>
        <label htmlFor="city-select">SELECIONE SUA CIDADE</label>
        <select className="form-select" id="city-select">{universities}</select>

        <label htmlFor="course-input">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
  <select className="select" id="course-select">{courses}</select>

        <label htmlFor="course-type">COMO VOCÊ QUER ESTUDAR?</label>
        <input type="checkbox" name="Presencial" title="Presencial" id="course-type"/>
        <input type="checkbox" name="A distância" title="A distância" id="course-type"/>

        <label htmlFor="price">ATÉ QUANTO PODE PAGAR?</label>
        <input type="range" name="Price" id="price"/>
        
        <div className="result">
          <div className="university">
            <input type="checkbox" name="" id=""/>
            <img src="" alt="logo"/>
            <span>
              <p>curso</p>
              <p>tipo</p>

              <p>bolsa</p>
            </span>
          </div>
        </div>

        <button className="cancel">Cancelar</button>
        <button className="addItem">Adicionar bolsa(s)</button>
      </form>
    </Modal>

    </div>
  )
}