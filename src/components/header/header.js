import React from 'react'
import HeaderBox from './Header-Box'
import '../styles/header.css'
import Man from "../../assets/Man.png";
import Logo from "./logo.png";
function Header() {
    return (
        <>
          <div className="topheader">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>  
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="side-btn">Lorem, ipsum dolor.</div>
                </nav>
                <img className="man" src={Man} alt=""/>
                <div className="btn-on-man">
                    <span className="playbtn">
                    <img className="btnimg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE2My44NjEgMTYzLjg2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHN0eWxlIGxhbmc9ImVuIiB0eXBlPSJ0ZXh0L2NzcyIgaWQ9Im5pZ2h0LW1vZGUtcHJvLXN0eWxlIj48L3N0eWxlPjxsaW5rIHR5cGU9InRleHQvY3NzIiByZWw9InN0eWxlc2hlZXQiIGlkPSJuaWdodC1tb2RlLXByby1saW5rIj48L2xpbms+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMzQuODU3LDMuNjEzQzIwLjA4NC00Ljg2MSw4LjEwNywyLjA4MSw4LjEwNywxOS4xMDZ2MTI1LjYzN2MwLDE3LjA0MiwxMS45NzcsMjMuOTc1LDI2Ljc1LDE1LjUwOUwxNDQuNjcsOTcuMjc1ICAgYzE0Ljc3OC04LjQ3NywxNC43NzgtMjIuMjExLDAtMzAuNjg2TDM0Ljg1NywzLjYxM3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" alt=""/>
                    </span>
                    <p>
                    Lorem, ipsum.
                    </p>
                    </div>

                <HeaderBox/>
            </header>
        </>
    )
}

export default Header
