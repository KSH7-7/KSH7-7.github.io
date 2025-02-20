import React from "react"
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa" // 원하는 아이콘 추가
import "./App.css"

const App: React.FC = () => {
  const handleButtonClick = (url: string): void => {
    window.open(url, "_blank")
  }

  return (
    <div className="App">
      <div className="card">
        <h2>대충 내용 들어갈만한 곳곳</h2>
        <div className="button-group">
          <button className="icon-button" onClick={() => handleButtonClick("https://github.com/KSH7-7")}>
            <FaGithub className="icon" /> GitHub
          </button>
          <button className="icon-button" onClick={() => handleButtonClick("https://")}>
            <FaFolderOpen className="icon" /> 공란
          </button>
          <button className="icon-button" onClick={() => handleButtonClick("https://")}>
            <FaExternalLinkAlt className="icon" /> 포폴 사이트
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
