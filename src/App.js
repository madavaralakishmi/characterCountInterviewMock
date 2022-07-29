import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'

class App extends Component {
  state = {inputText: '', newList: []}

  onInputStatus = event => {
    this.setState({inputText: event.target.value})
  }

  onButton = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newText = {
      id: v4(),
      text: inputText,
      textLen: inputText.length,
    }
    this.setState(prevState => ({
      newList: [...prevState.newList, newText],
      inputText: ' ',
    }))
  }

  render() {
    const {inputText, newList} = this.state
    console.log(inputText)
    console.log(newList)
    return (
      <div className="display-item">
        <div className="bg-cont">
          <div className="bg-colored">
            <h1>Count the characters like a Boss....</h1>
          </div>
          {newList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {newList.map(each => (
                <li key={each.id}>
                  {each.text}:{each.textLen}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-cont2">
          <form onSubmit={this.onButton}>
            <h1>Character Counter</h1>
            <div>
              <input
                placeholder="Enter the Characters here"
                type="text"
                value={inputText}
                onChange={this.onInputStatus}
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
