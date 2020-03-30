import React, {useState} from 'react';
import Modal from 'react-modal';
import {FaPlusCircle} from 'react-icons/fa'

import './Modal.css';

export default function MyModal() {
  const db = require('../Utils/db.json');
  const [modalIsOpen, setModalIsOpen] = useState(false)
  console.log(db)

  const arrCity = []
  const arrCourse = []

  // populando select de cidades

  db.map(item => {
    if(arrCity.includes(item.campus.city) === false) {
      arrCity.push(item.campus.city)
    }
  })
  const sortedCities = arrCity.sort()
  const cities = sortedCities.map(item => {
    return <option key={item} value={item}>{item}</option>
  })

  // populando select de cursos

  db.map(item => {
    if(arrCourse.includes(item.course.name) === false) {
      arrCourse.push(item.course.name)
    }
  })
  const sorted = arrCourse.sort()
  const courses = sorted.map(item => {
    return <option key={item} value={item}>{item}</option>
  })

  // cards
  const card = db.map(item => {
    return(
      <div className="university-card">
            <div className="select-option">
              <input type="checkbox" name="" id="select-course"/>
              <img src={item.university.logo_url} alt="logo" width={70}/>
            </div>
            <div className="info">

              <span className="course-info">
              <p className="course-name">{item.course.name}</p>
              <p>{item.course.level}</p>
              </span>

              <span className="price-info">
              <p className="percentage">Bolsa de 
                <span className="green-text">
                  {item.discount_percentage}%
                </span>
              </p>
              <p className="green-text" id="month-price">
                {item.price_with_discount}/mês
              </p>

              </span>
            </div>
          </div>
    )
  })

  return(
    <div className="modal-container">
      <FaPlusCircle size={80} color="#18acc4" onClick={() => setModalIsOpen(true)} />
      
      <Modal isOpen={modalIsOpen} ariaHideApp={false} overlayClassName="overlay">
        <span className="close" onClick={() => setModalIsOpen(false)}>&times;</span>
        <h1>Adicionar bolsa</h1>
        <p>Filtre e adicione as bolsas de seu interesse.</p>

        <form>
          <div className="select-div">
            <div>
              <label htmlFor="city-select">SELECIONE SUA CIDADE</label>
              <select className="form-select" id="city-select">{cities}</select>
            </div>
            <div>
              <label htmlFor="course-input">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
              <select className="select" id="course-select">{courses}</select>
            </div>
            

          </div>

          <div className="price-modality-options">
          <label htmlFor="modality">COMO VOCÊ QUER ESTUDAR?</label>
          <div className="modality">
            <input type="checkbox" name="Presencial" title="Presencial" id="course-type presencial"/>
            <label htmlFor="presencial">Presencial</label>
            <input type="checkbox" name="A distância" title="A distância" id="course-type distancia"/>
            <label htmlFor="distancia">A distância</label>
          </div>

          <div className="price-range">
          <label htmlFor="price">ATÉ QUANTO PODE PAGAR?</label>
          <input type="range" name="Price" id="price" min="0" max="10000" step="100"/>
          </div>

          </div>
          
          <div className="result">
            {card}
          </div>
          <div className="buttons">
          <button className="addItem">Adicionar bolsa(s)</button>
          <button className="cancel">Cancelar</button>

          </div>
      </form>
    </Modal>

    </div>
  )
}