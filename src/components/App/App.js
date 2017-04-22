/**
 * Created by moliq on 22.04.17.
 */
import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'
import Table from '../Table/Table'
import Car from '../Car/Car'

export const App = () => (
  <div>
    <Header/>
    <Car type="IN"/>
    <Table/>
    <Car type="OUT"/>
  </div>
)

export default App
