import { useState, useReducer, useEffect, useRef } from "react"
import "./App.css"
import { images, options, initialState } from "./constants/constants"

import Reducer from "./Helper/Reducer"

import mergeImages from "merge-images"

function App() {
  const [part, setPart] = useState("hair")
  const [state, dispatch] = useReducer(Reducer, initialState)

  function randomize() {
    options.map((option) => {
      return dispatch({
        type: option.toLowerCase(),
        payload:
          images[option.toLowerCase()].values[
            Math.floor(
              Math.random() * images[option.toLowerCase()].values.length
            )
          ],
      })
    })
  }

  const download = () => {
    let imageArray = []
    let prevName = ""
    Object.keys(state).forEach((key) => {
      let image_src = require(`./assets/alpaca-media/${key}/${state[key]}.png`)
      imageArray.push(image_src)
      if (prevName === "neck") {
        imageArray.push(require(`./assets/alpaca-media/nose.png`))
      }
      prevName = key
    })

    mergeImages(imageArray).then((b64) => {
      let a = document.createElement("a")
      a.href = b64
      a.download = "alpaca.png"
      a.click()
    })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Alpaca Generator</h1>
        <div className="content">
          <div className="graphics">
            <div className="mediaground">
              {Object.keys(state).map((key) => (
                <img
                  src={require(`./assets/alpaca-media/${key}/${state[key]}.png`)}
                />
              ))}
            </div>
            <div className="maincontrols">
              <button onClick={() => randomize()}>Randomize</button>
              <button onClick={() => download()}>Download</button>
            </div>
          </div>
          <div className="controls">
            <div className="primary">
              <h3>Customize Alpaca</h3>
              {options.map((option) => (
                <button
                  className={part === option ? "active" : ""}
                  onClick={(e) => setPart(e.target.innerHTML.toLowerCase())}
                  key={option}
                >
                  {option[0].toUpperCase() + option.substring(1)}
                </button>
              ))}
            </div>

            <div className="secondary">
              <h3>Style</h3>
              {options.map((option) => {
                return (
                  part === option &&
                  images[option].values.map((value) => (
                    <button
                      className={state[option] === value ? "active" : ""}
                      onClick={(e) =>
                        dispatch({
                          type: part,
                          payload: e.target.outerText.toLowerCase(),
                        })
                      }
                      key={value}
                    >
                      {value[0].toUpperCase() + value.substring(1)}
                    </button>
                  ))
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
