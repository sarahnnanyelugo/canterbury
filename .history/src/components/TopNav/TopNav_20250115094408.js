import React, { useState } from "react";
import { Home } from "../../Pages/Home/Home";
import "./top-nav.scss";
export const TopNav = ({ colorClass, navClass }) => {
  return (
    <>
      <div class="container container--orange">
        <div class="contents">
          <h1>Fullscreen Navigation</h1>
        </div>
        <nav class="nav nav1">
          <div class="nav__trigger">
            <i></i>
          </div>
          <ul class="nav1__list">
            <a class="nav1__link" href="#">
              1
            </a>
            <a class="nav1__link" href="#">
              2
            </a>
            <a class="nav1__link" href="#">
              3
            </a>
            <a class="nav1__link" href="#">
              4
            </a>
          </ul>
        </nav>
      </div>

      <div class="container container--green">
        <nav class="nav nav2">
          <div class="nav__trigger">
            <i></i>
          </div>
          <ul class="nav2__list">
            <a class="nav2__link" href="#">
              1
            </a>
            <a class="nav2__link" href="#">
              2
            </a>
            <a class="nav2__link" href="#">
              3
            </a>
            <a class="nav2__link" href="#">
              4
            </a>
          </ul>
        </nav>
      </div>

      <div class="container container--blue">
        <nav class="nav nav3">
          <div class="nav__trigger">
            <i></i>
          </div>
          <ul class="nav3__list">
            <a class="nav3__link" href="#">
              1
            </a>
            <a class="nav3__link" href="#">
              2
            </a>
            <a class="nav3__link" href="#">
              3
            </a>
            <a class="nav3__link" href="#">
              4
            </a>
          </ul>
        </nav>
      </div>

      <div class="container container--purple">
        <nav class="nav nav4">
          <div class="nav__trigger">
            <i></i>
          </div>
          <ul class="nav4__list">
            <a class="nav4__link" href="#">
              1
            </a>
            <a class="nav4__link" href="#">
              2
            </a>
            <a class="nav4__link" href="#">
              3
            </a>
            <a class="nav4__link" href="#">
              4
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};
