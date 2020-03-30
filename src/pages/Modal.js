import React from 'react';
import Modal from 'react-modal';

import './Modal.css';

export default function MyModal() {
  const db = require('../Utils/db.json');
  console.log(db)

  const arrCity = []
  const arrCourse = []

  // populando select de cidades

  db.map(item => {
    if(arrCity.includes(item.campus.city) === false) {
      arrCity.push(item.campus.city)
    }
  })
  const cities = arrCity.map(item => {
    return <option key={item} value={item}>{item}</option>
  })

  // populando select de cursos

  db.map(item => {
    if(arrCourse.includes(item.course.name) === false) {
      arrCourse.push(item.course.name)
    }
  })  
  const courses = arrCourse.map(item => {
    return <option key={item} value={item}>{item}</option>
  })

  // cards
  const card = db.map(item => {
    return(
      <div className="university">
            <input type="checkbox" name="" id=""/>
            <img src={item.university.logo_url} alt="logo" width={70}/>
            <span>
              <p>{item.course.name}</p>
              <p>{item.course.kind}</p>

    <p>Bolsa de {item.discount_percentage}%{item.price_with_discount}/mês</p>
            </span>
          </div>
    )
  })

  return(
    <div>
    <span className="close">&times;</span>
    <Modal isOpen={true} ariaHideApp={false}>
      <h1>Adicionar bolsa</h1>
      <p>Filtre e adicione as bolsas de seu interesse.</p>

      <form>
        <label htmlFor="city-select">SELECIONE SUA CIDADE</label>
        <select className="form-select" id="city-select">{cities}</select>

        <label htmlFor="course-input">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
        <select className="select" id="course-select">{courses}</select>

        <label htmlFor="course-type">COMO VOCÊ QUER ESTUDAR?</label>
        <input type="checkbox" name="Presencial" title="Presencial" id="course-type presencial"/>
        <label htmlFor="presencial">Presencial</label>
        <input type="checkbox" name="A distância" title="A distância" id="course-type distancia"/>
        <label htmlFor="distancia">A distância</label>

        <label htmlFor="price">ATÉ QUANTO PODE PAGAR?</label>
        <input type="range" name="Price" id="price" min="0" max="10000" step="100"/>
        
        <div className="result">
          {card}
        </div>

        <button className="addItem">Adicionar bolsa(s)</button>
        <button className="cancel">Cancelar</button>
      </form>
    </Modal>

    </div>
  )
}