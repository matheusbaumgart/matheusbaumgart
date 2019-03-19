import React, { Component } from "react";
import "./App.css";
import ScrollToTop from "./utils/scrollToTop";

import matheusBaumgartLogo from "./imgs/matheus-baumgart-font.svg";

import Home from "./pages/Home";
import Work from "./pages/Work";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <div className="container">
              <div className="sidebar">
                <div className="sidebar-container">
                  <Link to="/">
                    <img
                      className="matheus-baumgart"
                      src={matheusBaumgartLogo}
                      alt="Matheus Baumgart"
                    />
                  </Link>
                  <p>
                    Product, Design & Development - Experiencing it all is my
                    hobby.
                  </p>
                  <p>Multi-perspective is my superpower 🦄</p>
                  <div className="social-media-links">
                    {/* <a
                      target="_blank"
                      rel="author"
                      href="http://facebook.com/matheusbaumgart"
                    >
                      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0zNzMuMTU1LDIyNS41NDhoLTQ5Ljk2M1Y0MDYuODRoLTc0LjgwMlYyMjUuNTQ4SDIxMC45OVYxNjMuMDJoMzcuNDAxdi0zNy40MDIgICBjMC0yNi44MzgsNi4yODMtNDcuMTA3LDE4Ljg0My02MC44MTNjMTIuNTU5LTEzLjcwNiwzMy4zMDQtMjAuNTU1LDYyLjI0Mi0yMC41NTVoNDkuOTYzdjYyLjUyNmgtMzEuNDAxICAgYy0xMC42NjMsMC0xNy40NjcsMS44NTMtMjAuNDE3LDUuNTY4Yy0yLjk0OSwzLjcxMS00LjQyOCwxMC4yMy00LjQyOCwxOS41NTh2MzEuMTE5aDU2LjUzNEwzNzMuMTU1LDIyNS41NDh6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                    </a> */}
                    <a
                      target="_blank"
                      rel="author"
                      href="https://www.linkedin.com/in/matheusbaumgart/"
                    >
                      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0xMzMuNjE4LDM2Ny4xNTdINjcuNjY2VjE2OS4wMTZoNjUuOTUyVjM2Ny4xNTd6IE0xMjcuNjI2LDEzMi4zMzIgICBjLTYuODUxLDYuNTY3LTE1Ljg5Myw5Ljg1MS0yNy4xMjQsOS44NTFoLTAuMjg4Yy0xMC44NDgsMC0xOS42NDgtMy4yODQtMjYuNDA3LTkuODUxYy02Ljc2LTYuNTY3LTEwLjEzOC0xNC43MDMtMTAuMTM4LTI0LjQxICAgYzAtOS44OTcsMy40NzYtMTguMDgzLDEwLjQyMS0yNC41NTZjNi45NS02LjQ3MSwxNS45NDItOS43MDgsMjYuOTgtOS43MDhjMTEuMDM5LDAsMTkuODksMy4yMzcsMjYuNTUzLDkuNzA4ICAgYzYuNjYxLDYuNDczLDEwLjA4OCwxNC42NTksMTAuMjc3LDI0LjU1NkMxMzcuODk5LDExNy42MjUsMTM0LjQ3NywxMjUuNzYxLDEyNy42MjYsMTMyLjMzMnogTTM3MC44NzMsMzY3LjE1N2gtNjUuOTUydi0xMDUuOTIgICBjMC0yOS44NzktMTEuMDM2LTQ0LjgyMy0zMy4xMTYtNDQuODIzYy04LjM3NCwwLTE1LjQyLDIuMzMxLTIxLjEyOCw2Ljk5NWMtNS43MTUsNC42NjEtOS45OTYsMTAuMzI0LTEyLjg0NywxNi45OTEgICBjLTEuMzM1LDMuNDIyLTEuOTk5LDguNzUtMS45OTksMTUuOTgxdjExMC43NzVoLTY1Ljk1MmMwLjU3MS0xMTkuNTI5LDAuNTcxLTE4NS41NzksMC0xOTguMTQyaDY1Ljk1MnYyNy45NzQgICBjMTMuODY3LTIxLjY4MSwzMy41NTgtMzIuNTQ0LDU5LjEwMS0zMi41NDRjMjIuODQsMCw0MS4yMSw3LjUyLDU1LjEwNCwyMi41NTRjMTMuODk1LDE1LjAzNywyMC44NDEsMzcuMjE0LDIwLjg0MSw2Ni41MTl2MTEzLjY0ICAgSDM3MC44NzN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                    </a>
                    <a
                      target="_blank"
                      rel="author"
                      href="https://github.com/matheusbaumgart"
                    >
                      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1OC4xNzMsMzUyLjU5OWMtMy4wNDksMC41NjgtNC4zODEsMS45OTktMy45OTksNC4yODFjMC4zOCwyLjI4MywyLjA5MywzLjA0Niw1LjEzOCwyLjI4MyAgICBjMy4wNDktMC43Niw0LjM4LTIuMDk1LDMuOTk3LTMuOTk3QzE2Mi45MzEsMzUzLjA3NCwxNjEuMjE4LDM1Mi4yMTYsMTU4LjE3MywzNTIuNTk5eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0xNDEuODk4LDM1NC44ODVjLTMuMDQ2LDAtNC41NjgsMS4wNDEtNC41NjgsMy4xMzljMCwyLjQ3NCwxLjYxOSwzLjUxOCw0Ljg1MywzLjEzOGMzLjA0NiwwLDQuNTctMS4wNDcsNC41Ny0zLjEzOCAgICBDMTQ2Ljc1MywzNTUuNTUzLDE0NS4xMzQsMzU0LjUwMiwxNDEuODk4LDM1NC44ODV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTExOS42MjksMzU0LjAyMmMtMC43NiwyLjA5NSwwLjQ3OCwzLjUxOSwzLjcxMSw0LjI4NGMyLjg1NSwxLjEzNyw0LjY2NCwwLjU2OCw1LjQyNC0xLjcxNCAgICBjMC41NzItMi4wOTEtMC42NjYtMy42MS0zLjcxMS00LjU2OEMxMjIuMTk3LDM1MS4yNjUsMTIwLjM5LDM1MS45MjIsMTE5LjYyOSwzNTQuMDIyeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik00MTQuNDEsMjQuMTIzQzM5OC4zMjYsOC4wNDIsMzc4Ljk2NCwwLDM1Ni4zMDksMEg4Mi4yMjVDNTkuNTc3LDAsNDAuMjA4LDguMDQyLDI0LjEyMywyNC4xMjMgICAgQzguMDQyLDQwLjIwNywwLDU5LjU3NiwwLDgyLjIyNXYyNzQuMDg4YzAsMjIuNjUsOC4wNDIsNDIuMDE3LDI0LjEyMyw1OC4wOThjMTYuMDg0LDE2LjA4NCwzNS40NTQsMjQuMTI2LDU4LjEwMiwyNC4xMjZoNjMuOTUzICAgIGM0LjE4NCwwLDcuMzI3LTAuMTQ0LDkuNDItMC40MjRjMi4wOTItMC4yODgsNC4xODQtMS41MjYsNi4yNzktMy43MTdjMi4wOTYtMi4xODcsMy4xNC01LjM3NiwzLjE0LTkuNTYyICAgIGMwLTAuNTY4LTAuMDUtNy4wNDYtMC4xNDQtMTkuNDE3Yy0wLjA5Ny0xMi4zNzUtMC4xNDQtMjIuMTc2LTAuMTQ0LTI5LjQxbC02LjU2NywxLjE0M2MtNC4xODcsMC43Ni05LjQ2OSwxLjA5NS0xNS44NDYsMC45OTkgICAgYy02LjM3NC0wLjA5Ni0xMi45OS0wLjc2LTE5Ljg0MS0xLjk5OGMtNi44NTUtMS4yMzktMTMuMjI5LTQuMDkzLTE5LjEzLTguNTYyYy01Ljg5OC00LjQ3Ny0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1OSAgICBsLTIuODU2LTYuNTcxYy0xLjkwMy00LjM3My00Ljg5OS05LjIyOS04Ljk5Mi0xNC41NTRjLTQuMDkzLTUuMzMyLTguMjMyLTguOTQ5LTEyLjQxOS0xMC44NTJsLTEuOTk5LTEuNDI4ICAgIGMtMS4zMzEtMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQxLTEuMzM1LTEuOTk3LTIuNjY5LTIuNTY4LTMuOTk3Yy0wLjU3MS0xLjMzNS0wLjA5Ny0yLjQzLDEuNDI3LTMuMjg5ICAgIGMxLjUyNC0wLjg1NSw0LjI4MS0xLjI3OSw4LjI4LTEuMjc5bDUuNzA4LDAuODU1YzMuODA4LDAuNzYsOC41MTYsMy4wNDIsMTQuMTM0LDYuODUxYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQzICAgIGM0LjM4LDcuODA2LDkuNjU3LDEzLjc1LDE1Ljg0NiwxNy44NDNjNi4xODQsNC4wOTcsMTIuNDE5LDYuMTQzLDE4LjY5OSw2LjE0M3MxMS43MDQtMC40NzYsMTYuMjc0LTEuNDI0ICAgIGM0LjU2NS0wLjk1NCw4Ljg0OC0yLjM4NSwxMi44NDctNC4yODhjMS43MTMtMTIuNzUxLDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDFjLTEwLjg0OC0xLjE0My0yMC42MDItMi44NTQtMjkuMjY1LTUuMTQgICAgYy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTUtMjYuODM1LTExLjEzNmMtOS4yMzQtNS4xNC0xNi44OTQtMTEuNTEyLTIyLjk4NS0xOS4xM2MtNi4wOS03LjYxOC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OCAgICBjLTMuOTAxLTEyLjM3NS01Ljg1Mi0yNi42NTItNS44NTItNDIuODI5YzAtMjMuMDI5LDcuNTIxLTQyLjYzNywyMi41NTctNTguODE0Yy03LjA0NC0xNy4zMi02LjM3OS0zNi43MzIsMS45OTctNTguMjQyICAgIGM1LjUyLTEuNzE0LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTVjMTAuODUsNC4yODYsMTguNzk0LDcuOTUxLDIzLjg0LDEwLjk5MmM1LjA0NiwzLjA0Miw5LjA4OSw1LjYxNCwxMi4xMzUsNy43MSAgICBjMTcuNzA1LTQuOTQ5LDM1Ljk3Ni03LjQyMyw1NC44MTgtNy40MjNjMTguODQxLDAsMzcuMTE1LDIuNDc0LDU0LjgyMSw3LjQyM2wxMC44NDktNi44NTJjNy40MjYtNC41NywxNi4xOC04Ljc1NywyNi4yNjktMTIuNTYyICAgIGMxMC4wODgtMy44MDYsMTcuNzk1LTQuODU0LDIzLjEyNy0zLjE0YzguNTYyLDIxLjUxLDkuMzI4LDQwLjkyMiwyLjI3OSw1OC4yNDFjMTUuMDM2LDE2LjE3OSwyMi41NTksMzUuNzg2LDIyLjU1OSw1OC44MTUgICAgYzAsMTYuMTgtMS45NTEsMzAuNTA1LTUuODUyLDQyLjk2OWMtMy44OTgsMTIuNDY3LTguOTM5LDIyLjQ2My0xNS4xMywyOS45ODFjLTYuMTg0LDcuNTE5LTEzLjg5NCwxMy44NDMtMjMuMTI0LDE4Ljk4NiAgICBjLTkuMjMyLDUuMTM3LTE4LjE3OCw4Ljg1My0yNi44NCwxMS4xMzJjLTguNjYxLDIuMjg2LTE4LjQxNCw0LjAwNC0yOS4yNjMsNS4xNDdjOS44OTEsOC41NjIsMTQuODM5LDIyLjA3MiwxNC44MzksNDAuNTM4djY4LjIzOCAgICBjMCwzLjIzNywwLjQ3Miw1Ljg1MiwxLjQyNCw3Ljg1MWMwLjk1OCwxLjk5OCwyLjQ3OCwzLjM3NCw0LjU3MSw0LjE0MWMyLjEwMiwwLjc2LDMuOTQ5LDEuMjM1LDUuNTcxLDEuNDI0ICAgIGMxLjYyMiwwLjE5MSwzLjk0OSwwLjI4Nyw2Ljk5NSwwLjI4N2g2My45NTNjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDIgICAgVjgyLjIyNUM0MzguNTMzLDU5LjU3Niw0MzAuNDkxLDQwLjIwNCw0MTQuNDEsMjQuMTIzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik04Ni43OTMsMzE5LjE5NWMtMS4zMzEsMC45NDgtMS4xNDEsMi40NzEsMC41NzIsNC41NjVjMS45MDYsMS45MDIsMy40MjcsMi4xODksNC41NywwLjg1NSAgICBjMS4zMzEtMC45NDgsMS4xNDEtMi40NzEtMC41NzUtNC41NjlDODkuNDU4LDMxOC4zMzYsODcuOTM2LDMxOC4wNDksODYuNzkzLDMxOS4xOTV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTc3LjM3NCwzMTIuMDU3Yy0wLjU3LDEuMzM1LDAuMDk2LDIuNDc4LDEuOTk5LDMuNDI2YzEuNTIxLDAuOTU1LDIuNzYyLDAuNzY3LDMuNzExLTAuNTY4ICAgIGMwLjU3LTEuMzM1LTAuMDk2LTIuNDc4LTEuOTk5LTMuNDMzQzc5LjE4MiwzMTAuOTEsNzcuOTQ1LDMxMS4xMDIsNzcuMzc0LDMxMi4wNTd6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTk1LjY0NiwzMzAuMzMxYy0xLjcxNSwwLjk0OC0xLjcxNSwyLjY2NiwwLDUuMTM3YzEuNzEzLDIuNDc4LDMuMzI4LDMuMTQyLDQuODUzLDEuOTk4YzEuNzE0LTEuMzM0LDEuNzE0LTMuMTQyLDAtNS40MjcgICAgQzk4Ljk3OCwzMjkuNTcxLDk3LjM1OSwzMjguOTkzLDk1LjY0NiwzMzAuMzMxeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0xMDUuNjQxLDM0My4xNzRjLTEuNzE0LDEuNTI2LTEuMzM2LDMuMzI3LDEuMTQyLDUuNDI4YzIuMjgxLDIuMjc5LDQuMTg1LDIuNTY2LDUuNzA4LDAuODQ5ICAgIGMxLjUyNC0xLjUxOSwxLjE0My0zLjMyNi0xLjE0Mi01LjQyQzEwOS4wNjgsMzQxLjc1MSwxMDcuMTY0LDM0MS40NjMsMTA1LjY0MSwzNDMuMTc0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/work/:id" component={Work} />

                <footer className="main-col">
                  © {new Date().getFullYear()} Matheus Baumgart. All the rights
                  reserved.
                  <p style={{ fontSize: "12px", color: "#ccc" }}>
                    Social media icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/dave-gandy"
                      title="Dave Gandy"
                    >
                      Dave Gandy
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>{" "}
                    is licensed by{" "}
                    <a
                      href="http://creativecommons.org/licenses/by/3.0/"
                      title="Creative Commons BY 3.0"
                      target="_blank"
                    >
                      CC 3.0 BY
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
