import "./App.css";
import profileImg from "./assets/profile.png";
import { bookData } from "./BooksData";
import React, { useState } from "react";
import { colors } from "./Colors";
function App() {
  const [activeNav, setActiveNav] = useState("Programming");
  return (
    <div className="App">
      <div className="main-container">
        <div className="side-bar">
          <div className="profile-section">
            <img className="profile-image" src={profileImg} alt="" />
            <div className="user-name">Zeeshan Akhter</div>
          </div>
          <div className="nav-container">
            {bookData.map((item) => {
              return (
                <div
                  key={item.topic}
                  onClick={() => setActiveNav(item.topic)}
                  className="nav-items"
                  style={
                    activeNav === item.topic
                      ? {
                          backgroundColor: colors[item.topic],
                          color: "white",
                          borderColor: colors[item.topic],
                          borderRadius: "30px",
                        }
                      : null
                  }
                >
                  <h5 className="nav-link">{item.topic}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main">
          {bookData.map((item) => {
            if (item.topic === activeNav) {
              return (
                <div className="header-and-topic">
                  <h1 className="topic-name">{item.topic}</h1>
                </div>
              );
            }
            return "";
          })}
          <div className="book-container">
            {bookData
              .filter((item) => item.topic === activeNav)[0]
              .books.map((book) => {
                return (
                  <div key={book.name} className="book">
                    <img src={book.bookImage} alt="" className="book-image" />
                    <h3 className="book-name">{book.name}</h3>
                    <small className="author-name">{"by " + book.author}</small>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <footer className="footer">
        <h4 className="footer-heading">2023 | Zeeshan Akhter</h4>
        <div className="social-icons">
          <a href="https://twitter.com/zeeshan__akhter">
            <i className="icon fab fa-twitter"></i>
          </a>
          <a href="https://github.com/zeeshan-akhter">
            <i className="icon fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-akhter-4b1766216/">
            <i className="icon fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;