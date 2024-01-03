/* import {useState} from 'react'; */
import PropTypes from 'prop-types';

const todos = [
    'Faire une todo list',
    'Apprendre React',
    'Devenir un développeur web'
  ]

function App() {


    return <>
      <Title>Bienvenue dans mon application React</Title>
      <p>Je viens placer ici un paragraphe, pour gérer une zone de texte</p>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      </>
  }


function Title ({children}) {
  return <h1>{children}</h1>
}
Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default App
