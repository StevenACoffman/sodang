import React from 'react';
import styled from 'styled-components';

export const Button = styled.input`
    &:focus {
      outline: 0 !important; }
      min-width: 88px;
      height: 36px;
      margin-top: 5px;
      padding-top: 4px;
      border: 0px;
      border-radius: 2px;
      background-color: transparent;
      font-size: 14px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      transition: background-color 0.2s;
      -moz-transition: background-color 0.2s;
      -webkit-transition: background-color 0.2s;
      -o-transition: background-color 0.2s; }

`;

material:focus {
  outline: 0 !important; }

.material[type="button"].flat, .material[type="submit"].flat, .material[type="reset"].flat, button.material.flat {
  min-width: 88px;
  height: 36px;
  margin-top: 5px;
  padding-top: 4px;
  border: 0px;
  border-radius: 2px;
  background-color: transparent;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  -webkit-transition: background-color 0.2s;
  -o-transition: background-color 0.2s; }
  .material[type="button"].flat.light, .material[type="submit"].flat.light, .material[type="reset"].flat.light, button.material.flat.light {
    overflow: hidden;
    color: #414141; }
    .material[type="button"].flat.light:hover, .material[type="submit"].flat.light:hover, .material[type="reset"].flat.light:hover, button.material.flat.light:hover {
      background-color: rgba(153, 153, 153, 0.2); }
    .material[type="button"].flat.light:active, .material[type="submit"].flat.light:active, .material[type="reset"].flat.light:active, button.material.flat.light:active {
      background-color: rgba(153, 153, 153, 0.4); }
    .material[type="button"].flat.light:disabled, .material[type="submit"].flat.light:disabled, .material[type="reset"].flat.light:disabled, button.material.flat.light:disabled {
      color: rgba(0, 0, 0, 0.26);
      background-color: transparent !important; }
  .material[type="button"].flat.dark, .material[type="submit"].flat.dark, .material[type="reset"].flat.dark, button.material.flat.dark {
    color: white; }
    .material[type="button"].flat.dark:hover, .material[type="submit"].flat.dark:hover, .material[type="reset"].flat.dark:hover, button.material.flat.dark:hover {
      background-color: rgba(204, 204, 204, 0.15); }
    .material[type="button"].flat.dark:active, .material[type="submit"].flat.dark:active, .material[type="reset"].flat.dark:active, button.material.flat.dark:active {
      background-color: rgba(204, 204, 204, 0.25); }
      .material[type="button"].flat.dark:active::before, .material[type="submit"].flat.dark:active::before, .material[type="reset"].flat.dark:active::before, button.material.flat.dark:active::before {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 6px;
        height: 6px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        content: ' '; }
      .material[type="button"].flat.dark:active::after, .material[type="submit"].flat.dark:active::after, .material[type="reset"].flat.dark:active::after, button.material.flat.dark:active::after {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 6px;
        height: 6px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        content: ' '; }
    .material[type="button"].flat.dark:disabled, .material[type="submit"].flat.dark:disabled, .material[type="reset"].flat.dark:disabled, button.material.flat.dark:disabled {
      color: rgba(255, 255, 255, 0.3);
      background-color: transparent !important; }

.material[type="button"].raised, .material[type="submit"].raised, .material[type="reset"].raised {
  min-width: 88px;
  height: 36px;
  margin-top: 5px;
  padding-top: 4px;
  border: 0px;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  -webkit-transition: background-color 0.2s, -webkit-box-shadow 0.2s, box-shadow 0.2s;
  -moz-transition: background-color 0.2s, -moz-box-shadow 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, -moz-box-shadow 0.2s, -webkit-box-shadow 0.2s; }
  .material[type="button"].raised.light, .material[type="submit"].raised.light, .material[type="reset"].raised.light {
    color: #414141;
    background-color: #e0e0e0; }
    .material[type="button"].raised.light:active, .material[type="submit"].raised.light:active, .material[type="reset"].raised.light:active {
      background-color: #d6d6d6;
      -webkit-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3); }
    .material[type="button"].raised.light:disabled, .material[type="submit"].raised.light:disabled, .material[type="reset"].raised.light:disabled {
      color: rgba(0, 0, 0, 0.26);
      background-color: rgba(0, 0, 0, 0.12); }
  .material[type="button"].raised.dark, .material[type="submit"].raised.dark, .material[type="reset"].raised.dark {
    color: white;
    background-color: #ffa441; }
    .material[type="button"].raised.dark:active, .material[type="submit"].raised.dark:active, .material[type="reset"].raised.dark:active {
      background-color: #ffbc74;
      -webkit-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3); }
    .material[type="button"].raised.dark:disabled, .material[type="submit"].raised.dark:disabled, .material[type="reset"].raised.dark:disabled {
      color: rgba(255, 255, 255, 0.3);
      background-color: rgba(255, 255, 255, 0.12); }
  .material[type="button"].raised:disabled, .material[type="submit"].raised:disabled, .material[type="reset"].raised:disabled {
    -webkit-box-shadow: 0px 3px 6px transparent;
    -moz-box-shadow: 0px 3px 6px transparent;
    box-shadow: 0px 3px 6px transparent; }

.material[type="button"].floating, .material[type="submit"].floating, .material[type="reset"].floating {
  width: 56px;
  height: 56px;
  padding: 11px 17px 18px 17px;
  background-color: #ffa441;
  color: white;
  border-radius: 28px;
  border: 0px;
  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 0.5px;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  margin: 10px;
  -webkit-transition: background-color 0.2s, -webkit-box-shadow 0.2s, box-shadow 0.2s;
  -moz-transition: background-color 0.2s, -moz-box-shadow 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, -moz-box-shadow 0.2s, -webkit-box-shadow 0.2s; }
  .material[type="button"].floating.light:active, .material[type="submit"].floating.light:active, .material[type="reset"].floating.light:active {
    background-color: #ff9d32; }
  .material[type="button"].floating.light:disabled, .material[type="submit"].floating.light:disabled, .material[type="reset"].floating.light:disabled {
    color: rgba(255, 255, 255, 0.6);
    background-color: #d1d1d1; }
  .material[type="button"].floating.dark:active, .material[type="submit"].floating.dark:active, .material[type="reset"].floating.dark:active {
    background-color: #ffbc74; }
  .material[type="button"].floating.dark:disabled, .material[type="submit"].floating.dark:disabled, .material[type="reset"].floating.dark:disabled {
    color: rgba(255, 255, 255, 0.3);
    background-color: #4b4b4b; }
  .material[type="button"].floating:active, .material[type="submit"].floating:active, .material[type="reset"].floating:active {
    background-color: #ffbc74;
    -webkit-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3); }
  .material[type="button"].floating:disabled, .material[type="submit"].floating:disabled, .material[type="reset"].floating:disabled {
    -webkit-box-shadow: 0px 3px 6px transparent;
    -moz-box-shadow: 0px 3px 6px transparent;
    box-shadow: 0px 3px 6px transparent; }

.material[type="text"], .material[type="password"], .material[type="email"], .material[type="number"], .material[type="search"], .material[type="tel"], .material[type="url"] {
  border: 0px;
  background-color: transparent !important;
  border-radius: 0px;
  padding: 7px 2px 7px 2px;
  font-size: 13px;
  margin-bottom: 1px;
  transition: border-bottom-color 0.2s;
  -moz-transition: border-bottom-color 0.2s;
  -webkit-transition: border-bottom-color 0.2s;
  -o-transition: border-bottom-color 0.2s; }
  .material[type="text"].light, .material[type="password"].light, .material[type="email"].light, .material[type="number"].light, .material[type="search"].light, .material[type="tel"].light, .material[type="url"].light {
    color: black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); }
    .material[type="text"].light:disabled, .material[type="password"].light:disabled, .material[type="email"].light:disabled, .material[type="number"].light:disabled, .material[type="search"].light:disabled, .material[type="tel"].light:disabled, .material[type="url"].light:disabled {
      border-bottom: 1px dotted rgba(0, 0, 0, 0.5); }
  .material[type="text"].dark, .material[type="password"].dark, .material[type="email"].dark, .material[type="number"].dark, .material[type="search"].dark, .material[type="tel"].dark, .material[type="url"].dark {
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4); }
    .material[type="text"].dark:disabled, .material[type="password"].dark:disabled, .material[type="email"].dark:disabled, .material[type="number"].dark:disabled, .material[type="search"].dark:disabled, .material[type="tel"].dark:disabled, .material[type="url"].dark:disabled {
      border-bottom: 1px dotted rgba(255, 255, 255, 0.4); }
  .material[type="text"]:hover, .material[type="password"]:hover, .material[type="email"]:hover, .material[type="number"]:hover, .material[type="search"]:hover, .material[type="tel"]:hover, .material[type="url"]:hover {
    border-bottom: 1px solid rgba(255, 164, 65, 0.5); }
  .material[type="text"]:focus, .material[type="password"]:focus, .material[type="email"]:focus, .material[type="number"]:focus, .material[type="search"]:focus, .material[type="tel"]:focus, .material[type="url"]:focus {
    border-bottom: 2px solid #ffa441;
    margin-bottom: 0px; }
  .material[type="text"]::-webkit-input-placeholder, .material[type="text"]:-moz-placeholder, .material[type="text"]::-moz-placeholder, .material[type="text"]:-ms-input-placeholder, .material[type="password"]::-webkit-input-placeholder, .material[type="password"]:-moz-placeholder, .material[type="password"]::-moz-placeholder, .material[type="password"]:-ms-input-placeholder, .material[type="email"]::-webkit-input-placeholder, .material[type="email"]:-moz-placeholder, .material[type="email"]::-moz-placeholder, .material[type="email"]:-ms-input-placeholder, .material[type="number"]::-webkit-input-placeholder, .material[type="number"]:-moz-placeholder, .material[type="number"]::-moz-placeholder, .material[type="number"]:-ms-input-placeholder, .material[type="search"]::-webkit-input-placeholder, .material[type="search"]:-moz-placeholder, .material[type="search"]::-moz-placeholder, .material[type="search"]:-ms-input-placeholder, .material[type="tel"]::-webkit-input-placeholder, .material[type="tel"]:-moz-placeholder, .material[type="tel"]::-moz-placeholder, .material[type="tel"]:-ms-input-placeholder, .material[type="url"]::-webkit-input-placeholder, .material[type="url"]:-moz-placeholder, .material[type="url"]::-moz-placeholder, .material[type="url"]:-ms-input-placeholder {
    color: rgba(153, 153, 153, 0.8); }
  .material[type="text"]:-moz-placeholder, .material[type="text"]::-moz-placeholder, .material[type="password"]:-moz-placeholder, .material[type="password"]::-moz-placeholder, .material[type="email"]:-moz-placeholder, .material[type="email"]::-moz-placeholder, .material[type="number"]:-moz-placeholder, .material[type="number"]::-moz-placeholder, .material[type="search"]:-moz-placeholder, .material[type="search"]::-moz-placeholder, .material[type="tel"]:-moz-placeholder, .material[type="tel"]::-moz-placeholder, .material[type="url"]:-moz-placeholder, .material[type="url"]::-moz-placeholder {
    opacity: 1; }
  .material[type="text"] + .error, .material[type="password"] + .error, .material[type="email"] + .error, .material[type="number"] + .error, .material[type="search"] + .error, .material[type="tel"] + .error, .material[type="url"] + .error {
    display: none; }
  .material[type="text"][error], .material[type="password"][error], .material[type="email"][error], .material[type="number"][error], .material[type="search"][error], .material[type="tel"][error], .material[type="url"][error] {
    border-bottom: 1px solid red; }
    .material[type="text"][error]:focus, .material[type="password"][error]:focus, .material[type="email"][error]:focus, .material[type="number"][error]:focus, .material[type="search"][error]:focus, .material[type="tel"][error]:focus, .material[type="url"][error]:focus {
      border-bottom: 2px solid red; }
    .material[type="text"][error]:disabled, .material[type="password"][error]:disabled, .material[type="email"][error]:disabled, .material[type="number"][error]:disabled, .material[type="search"][error]:disabled, .material[type="tel"][error]:disabled, .material[type="url"][error]:disabled {
      border-bottom: 1px dotted rgba(255, 0, 0, 0.4); }
      .material[type="text"][error]:disabled + .error, .material[type="password"][error]:disabled + .error, .material[type="email"][error]:disabled + .error, .material[type="number"][error]:disabled + .error, .material[type="search"][error]:disabled + .error, .material[type="tel"][error]:disabled + .error, .material[type="url"][error]:disabled + .error {
        color: rgba(255, 0, 0, 0.4); }
    .material[type="text"][error] + .error, .material[type="password"][error] + .error, .material[type="email"][error] + .error, .material[type="number"][error] + .error, .material[type="search"][error] + .error, .material[type="tel"][error] + .error, .material[type="url"][error] + .error {
      display: block;
      position: relative;
      top: 2px;
      color: red;
      font-size: 11px; }

textarea.material {
  border: 0px;
  background-color: transparent;
  border-radius: 0px;
  padding: 7px 2px 7px 2px;
  font-size: 13px;
  margin-bottom: 0px;
  transition: border-bottom 0.2s, margin-bottom 0.2s;
  -moz-transition: border-bottom 0.2s, margin-bottom 0.2s;
  -webkit-transition: border-bottom 0.2s, margin-bottom 0.2s;
  -o-transition: border-bottom 0.2s, margin-bottom 0.2s; }
  textarea.material.light {
    color: black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); }
    textarea.material.light:disabled {
      border-bottom: 1px dotted rgba(0, 0, 0, 0.5); }
  textarea.material.dark {
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4); }
    textarea.material.dark:disabled {
      border-bottom: 1px dotted rgba(255, 255, 255, 0.4); }
  textarea.material:hover {
    border-bottom: 1px solid rgba(255, 164, 65, 0.5); }
  textarea.material:focus {
    border-bottom: 2px solid #ffa441; }
  textarea.material::-webkit-input-placeholder, textarea.material:-moz-placeholder, textarea.material::-moz-placeholder, textarea.material:-ms-input-placeholder {
    color: rgba(153, 153, 153, 0.8); }
  textarea.material:-moz-placeholder, textarea.material::-moz-placeholder {
    opacity: 1; }
  textarea.material + .error {
    display: none; }
  textarea.material[error] {
    border-bottom: 1px solid red; }
    textarea.material[error]:focus {
      border-bottom: 2px solid red; }
    textarea.material[error]:disabled {
      border-bottom: 1px dotted rgba(255, 0, 0, 0.4); }
      textarea.material[error]:disabled + .error {
        color: rgba(255, 0, 0, 0.4); }
    textarea.material[error] + .error {
      display: block;
      position: relative;
      top: -4px;
      color: red;
      font-size: 11px; }

.material[type="checkbox"] {
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0px;
  appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border-radius: 2px;
  background-color: transparent;
  transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -moz-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -webkit-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -o-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s; }
  .material[type="checkbox"].light {
    border: 2px solid rgba(0, 0, 0, 0.54); }
    .material[type="checkbox"].light + label {
      color: rgba(0, 0, 0, 0.8); }
    .material[type="checkbox"].light:checked::before {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="checkbox"].light:checked::after {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="checkbox"].light:checked:active {
      box-shadow: 0px 0px 0px 14px rgba(0, 0, 0, 0.1); }
    .material[type="checkbox"].light:active {
      box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
    .material[type="checkbox"].light:disabled {
      border: 2px solid rgba(0, 0, 0, 0.26); }
      .material[type="checkbox"].light:disabled:checked {
        background-color: rgba(0, 0, 0, 0.26); }
  .material[type="checkbox"].dark {
    border: 2px solid rgba(255, 255, 255, 0.7); }
    .material[type="checkbox"].dark + label {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="checkbox"].dark:checked::before {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="checkbox"].dark:checked::after {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="checkbox"].dark:checked:active {
      box-shadow: 0px 0px 0px 14px rgba(255, 255, 255, 0.1); }
    .material[type="checkbox"].dark:active {
      box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
    .material[type="checkbox"].dark:disabled {
      border: 2px solid rgba(255, 255, 255, 0.3); }
      .material[type="checkbox"].dark:disabled:checked {
        background-color: rgba(255, 255, 255, 0.3); }
  .material[type="checkbox"]:checked {
    position: relative;
    top: -6px;
    text-align: center;
    overflow: hidden;
    vertical-align: middle;
    border: 2px solid #ffa441;
    background-color: #ffa441; }
    .material[type="checkbox"]:checked::before {
      position: relative;
      top: -10px;
      left: -11px;
      transform: rotate(-55deg);
      display: inline-block;
      content: '|';
      font-family: Arial;
      font-size: 22px; }
    .material[type="checkbox"]:checked::after {
      position: relative;
      top: -35px;
      left: 4px;
      transform: rotate(35deg);
      display: inline-block;
      content: '|';
      font-family: Arial;
      font-size: 22px; }
    .material[type="checkbox"]:checked:disabled {
      border: 2px solid transparent; }

.material.switch > input[type="checkbox"] {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden; }
  .material.switch > input[type="checkbox"] + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 2px;
    width: 38px;
    height: 14px;
    background-color: rgba(0, 0, 0, 0.26);
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px; }
    .material.switch > input[type="checkbox"] + label::before, .material.switch > input[type="checkbox"] + label::after {
      display: block;
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      content: ""; }
    .material.switch > input[type="checkbox"] + label::before {
      right: 1px;
      background-color: rgba(0, 0, 0, 0.26);
      -webkit-border-radius: 60px;
      -moz-border-radius: 60px;
      -ms-border-radius: 60px;
      -o-border-radius: 60px;
      border-radius: 60px;
      -webkit-transition: background 0.4s;
      -moz-transition: background 0.4s;
      -o-transition: background 0.4s;
      transition: background 0.4s; }
    .material.switch > input[type="checkbox"] + label::after {
      position: relative;
      top: -5px;
      left: -2px;
      width: 20px;
      height: 20px;
      background-color: #fafafa;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      -ms-border-radius: 100%;
      -o-border-radius: 100%;
      border-radius: 100%;
      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      -webkit-transition: margin 0.2s, background-color 0.2s, -webkit-box-shadow 0.2s;
      -moz-transition: margin 0.2s, background-color 0.2s, -moz-box-shadow 0.2s;
      -o-transition: margin 0.2s, background-color 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
      transition: margin 0.2s, background-color 0.2s, box-shadow 0.2s, -moz-box-shadow 0.2s, -webkit-box-shadow 0.2s; }
  .material.switch > input[type="checkbox"]:checked + label::before {
    background-color: rgba(255, 164, 65, 0.5); }
  .material.switch > input[type="checkbox"]:checked + label::after {
    background-color: #ffa441;
    margin-left: 18px;
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); }
  .material.switch > input[type="checkbox"]:disabled + label {
    cursor: default; }
    .material.switch > input[type="checkbox"]:disabled + label::before {
      background-color: rgba(0, 0, 0, 0.12); }
    .material.switch > input[type="checkbox"]:disabled + label::after {
      background-color: #bdbdbd;
      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }
  .material.switch > input[type="checkbox"]:disabled:checked + label::before {
    background-color: rgba(0, 0, 0, 0.12); }
  .material.switch > input[type="checkbox"]:disabled:checked + label::after {
    background-color: #bdbdbd;
    margin-left: 18px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }

.material[type="radio"] {
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0px;
  margin: 10px;
  appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border-radius: 8px;
  background-color: transparent;
  transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -moz-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -webkit-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s;
  -o-transition: box-shadow 0.2s, border 0.2s, background-color 0.2s; }
  .material[type="radio"].light {
    border: 2px solid rgba(0, 0, 0, 0.54); }
    .material[type="radio"].light + label {
      color: rgba(0, 0, 0, 0.8); }
    .material[type="radio"].light:checked {
      border: 2px solid #ffa441; }
      .material[type="radio"].light:checked::before {
        content: " ";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 0px;
        height: 0px;
        border: 3px solid #ffa441;
        border-radius: 3px; }
      .material[type="radio"].light:checked:active {
        box-shadow: 0px 0px 0px 11px rgba(0, 0, 0, 0.1); }
      .material[type="radio"].light:checked:disabled::before {
        content: " ";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 0px;
        height: 0px;
        border: 3px solid rgba(0, 0, 0, 0.26);
        border-radius: 3px; }
    .material[type="radio"].light:active {
      box-shadow: 0px 0px 0px 11px rgba(255, 164, 65, 0.2); }
    .material[type="radio"].light:disabled {
      border: 2px solid rgba(0, 0, 0, 0.26); }
  .material[type="radio"].dark {
    border: 2px solid rgba(255, 255, 255, 0.7); }
    .material[type="radio"].dark + label {
      color: rgba(255, 255, 255, 0.8); }
    .material[type="radio"].dark:checked {
      border: 2px solid #ffa441; }
      .material[type="radio"].dark:checked::before {
        content: " ";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 0px;
        height: 0px;
        border: 3px solid #ffa441;
        border-radius: 3px; }
      .material[type="radio"].dark:checked:active {
        box-shadow: 0px 0px 0px 11px rgba(255, 255, 255, 0.1); }
      .material[type="radio"].dark:checked:disabled::before {
        content: " ";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 0px;
        height: 0px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 3px; }
    .material[type="radio"].dark:active {
      box-shadow: 0px 0px 0px 11px rgba(255, 164, 65, 0.2); }
    .material[type="radio"].dark:disabled {
      border: 2px solid rgba(255, 255, 255, 0.3); }

input[type=range].material {
  -webkit-appearance: none;
  width: 100%;
  margin: 18px 0; }
  input[type=range].material::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    transition: background-color 0.2s;
    border: 0px;
    -webkit-appearance: none; }
  input[type=range].material::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    border: 0px;
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    transition: background-color 0.2s; }
  input[type=range].material::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    border-width: 2px 0;
    border-color: transparent;
    color: transparent;
    background: transparent;
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    transition: background-color 0.2s; }
  input[type=range].material::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb;
    border-radius: 12px;
    cursor: pointer;
    margin-top: -5px;
    -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -webkit-appearance: none; }
  input[type=range].material::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb;
    border-radius: 12px;
    cursor: pointer;
    margin-top: -5px;
    -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    transition: background-color 0.2s, box-shadow 0.2s, border 0.2s; }
  input[type=range].material::-ms-thumb {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb;
    border-radius: 12px;
    cursor: pointer;
    margin-top: -5px;
    -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
    transition: background-color 0.2s, box-shadow 0.2s, border 0.2s; }
  input[type=range].material:focus {
    outline: none; }
  input[type=range].material:active::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
  input[type=range].material:active::-moz-range-thumb {
    box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
  input[type=range].material:active::-ms-thumb {
    box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
  input[type=range].material:disabled::-webkit-slider-thumb {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    margin-top: -3px; }
  input[type=range].material:disabled::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    margin-top: -3px; }
  input[type=range].material:disabled::-ms-thumb {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    margin-top: -3px; }
  input[type=range].material:disabled:active::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px 0px transparent; }
  input[type=range].material:disabled:active::-moz-range-thumb {
    box-shadow: 0px 0px 0px 0px transparent; }
  input[type=range].material:disabled:active::-ms-thumb {
    box-shadow: 0px 0px 0px 0px transparent; }
  input[type=range].material.light::-webkit-slider-runnable-track {
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light::-moz-range-track {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light::-ms-track, input[type=range].material.light::-ms-fill-lower, input[type=range].material.light::-ms-fill-upper {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light::-webkit-slider-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb; }
  input[type=range].material.light::-moz-range-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb; }
  input[type=range].material.light::-ms-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    background-color: #ebebeb; }
  input[type=range].material.light:active::-webkit-slider-runnable-track {
    background-color: #ffa441; }
  input[type=range].material.light:active::-moz-range-track {
    background: #ffa441;
    background-color: #ffa441; }
  input[type=range].material.light:active::-ms-track, input[type=range].material.light:active::-ms-fill-lower, input[type=range].material.light:active::-ms-fill-upper {
    background: #ffa441;
    background-color: #ffa441; }
  input[type=range].material.light:active::-webkit-slider-thumb {
    border: 4px solid #ffa441;
    background-color: #ffa441; }
  input[type=range].material.light:active::-moz-range-thumb {
    border: 4px solid #ffa441;
    background-color: #ffa441; }
  input[type=range].material.light:active::-ms-thumb {
    border: 4px solid #ffa441;
    background-color: #ffa441; }
  input[type=range].material.light:disabled::-webkit-slider-runnable-track {
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled::-moz-range-track {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled::-ms-track, input[type=range].material.light:disabled::-ms-fill-lower, input[type=range].material.light:disabled::-ms-fill-upper {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled::-webkit-slider-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.light:disabled::-moz-range-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.light:disabled::-ms-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.light:disabled:active::-webkit-slider-runnable-track {
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled:active::-moz-range-track {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled:active::-ms-track, input[type=range].material.light:disabled:active::-ms-fill-lower, input[type=range].material.light:disabled:active::-ms-fill-upper {
    background: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.26); }
  input[type=range].material.light:disabled:active::-webkit-slider-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.light:disabled:active::-moz-range-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.light:disabled:active::-ms-thumb {
    border: 2px solid rgba(0, 0, 0, 0.26);
    outline: 2px solid #ebebeb;
    background-color: #ebebeb; }
  input[type=range].material.dark::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.3);
    background-color: #5b5b5b; }
  input[type=range].material.dark::-moz-range-track {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark::-webkit-slider-thumb, input[type=range].material.dark::-moz-range-thumb, input[type=range].material.dark::-ms-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    background-color: #333333; }
  input[type=range].material.dark::-webkit-slider-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    background-color: #333333; }
  input[type=range].material.dark:active::-webkit-slider-runnable-track {
    background-color: #ff8c0e; }
  input[type=range].material.dark:active::-moz-range-track {
    background: #ff8c0e;
    background-color: #ff8c0e; }
  input[type=range].material.dark:active::-ms-track, input[type=range].material.dark:active::-ms-fill-lower, input[type=range].material.dark:active::-ms-fill-upper {
    background: #ff8c0e;
    background-color: #ff8c0e; }
  input[type=range].material.dark:active::-webkit-slider-thumb {
    border: 4px solid #ff8c0e;
    background-color: #ff8c0e; }
  input[type=range].material.dark:active::-moz-range-thumb {
    border: 4px solid #ff8c0e;
    background-color: #ff8c0e; }
  input[type=range].material.dark:active::-ms-thumb {
    border: 4px solid #ff8c0e;
    background-color: #ff8c0e; }
  input[type=range].material.dark:disabled::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.3);
    background-color: #5b5b5b; }
  input[type=range].material.dark:disabled::-moz-range-track {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark:disabled::-ms-track, input[type=range].material.dark:disabled::-ms-fill-lower, input[type=range].material.dark:disabled::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark:disabled::-webkit-slider-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }
  input[type=range].material.dark:disabled::-moz-range-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }
  input[type=range].material.dark:disabled::-ms-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }
  input[type=range].material.dark:disabled:active::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.3);
    background-color: #5b5b5b; }
  input[type=range].material.dark:disabled:active::-moz-range-track {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark:disabled:active::-ms-track, input[type=range].material.dark:disabled:active::-ms-fill-lower, input[type=range].material.dark:disabled:active::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.3); }
  input[type=range].material.dark:disabled:active::-webkit-slider-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }
  input[type=range].material.dark:disabled:active::-moz-range-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }
  input[type=range].material.dark:disabled:active::-ms-thumb {
    border: 2px solid rgba(255, 255, 255, 0.3);
    outline: 2px solid #333333;
    background-color: #333333; }

/* ============================================================
	RESET
============================================================ */
@font-face {
  font-family: 'roboto';
  src: url("fonts/roboto-regular-webfont.eot");
  src: url("fonts/roboto-regular-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/roboto-regular-webfont.woff2") format("woff2"), url("fonts/roboto-regular-webfont.woff") format("woff"), url("fonts/roboto-regular-webfont.ttf") format("truetype"), url("fonts/roboto-regular-webfont.svg#robotoregular") format("svg");
  font-weight: normal;
  font-style: normal; }

@font-face {
  font-family: 'robotobold';
  src: url("fonts/roboto-bold-webfont.eot");
  src: url("fonts/roboto-bold-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/roboto-bold-webfont.woff2") format("woff2"), url("fonts/roboto-bold-webfont.woff") format("woff"), url("fonts/roboto-bold-webfont.ttf") format("truetype"), url("fonts/roboto-bold-webfont.svg#robotobold") format("svg");
  font-weight: normal;
  font-style: normal; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline; }

body {
  line-height: 1; }

h1, h2, h3, h4, h5, h6 {
  clear: both;
  font-weight: normal; }

ol, ul {
  list-style: none; }

blockquote {
  quotes: none; }

blockquote:before, blockquote:after {
  content: '';
  content: none; }

del {
  text-decoration: line-through; }

/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0; }

a img {
  border: none; }

/* ============================================================
	GLOBALS
============================================================ */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

body {
  background-color: #3f52b5;
  color: #505050;
  font-family: "roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.8; }

/* Headings */
h1, h2, h3, h4, h5, h6 {
  line-height: 1;
  font-weight: 400;
  font-family: "roboto", serif; }

a {
  text-decoration: none;
  color: #dc8c96; }

a:hover {
  color: #ca5160; }

/* clear floated divs */
.clearfix:after {
  content: "";
  display: table;
  clear: both; }

/* ============================================================
	COMMON
============================================================ */
#wrapper {
  min-width: 600px; }

.themeColor {
  vertical-align: middle;
  padding: 50px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); }

.settings {
  display: table;
  width: 100%; }

.settings .row {
  display: table-row; }

.settings .question, .settings,
.settings .switch {
  display: table-cell;
  vertical-align: middle;
  padding: 10px; }

.settings .question {
  width: 600px;
  font-family: "roboto", serif;
  font-size: 20px; }

/* ============================================================
	TEMPLATE
============================================================ */
#wrapper {
  width: 100%;
  margin: 0 auto; }

#main {
  background-color: #fafafa;
  padding: 30px 0; }

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px; }

/* ============================================================
	INFO BAR
============================================================ */
.info-bar {
  background-color: #3f52b5;
  text-align: center; }

.info-bar a.icon {
  margin: 0 5px;
  padding: 10px 0;
  color: #fff;
  font-size: 20px;
  position: relative; }

.info-bar a.icon[data-title]:hover:after {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20px;
  content: attr(data-title);
  padding: 5px 10px;
  background-color: #ca5160;
  font-family: "roboto", sans-serif;
  color: #fff;
  font-size: 12px;
  white-space: nowrap; }

/* ============================================================
	HEADER
============================================================ */
header .branding {
  padding: 40px 0;
  background-color: #3f52b5; }

header .branding .container {
  padding: 0 30px 0 90px; }

header .social {
  float: left;
  width: 100%;
  height: 60px;
  text-align: right;
  line-height: 60px; }

header .social a {
  transition: opacity 0.3s; }

header .social a:hover {
  opacity: 0.4; }

header .logo {
  float: left;
  width: 60px;
  height: 60px;
  margin-left: -60px; }

header .logo img {
  position: relative;
  top: -25px;
  width: 109px;
  filter: hue-rotate(65deg) saturate(9) brightness(1.25);
  -webkit-filter: hue-rotate(65deg) saturate(9) brightness(1.25); }

header .bottom {
  background-color: #3f52b5;
  padding: 10px 30px;
  text-align: center;
  height: 150px; }

header .site-title h1 {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 12px; }

/* ============================================================
	FOOTER
============================================================ */
footer {
  padding: 30px 0; }

footer .container {
  padding: 0 30px; }

footer aside {
  width: 33.3333%;
  float: left; }

footer aside.logo {
  text-align: right; }

footer aside.logo img {
  width: 128px;
  filter: hue-rotate(65deg) saturate(9) brightness(1.25);
  -webkit-filter: hue-rotate(65deg) saturate(9) brightness(1.25); }

footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0; }

footer ul a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s; }

footer ul a:hover {
  color: rgba(255, 255, 255, 0.5); }

footer .copyright {
  margin-top: 30px;
  text-align: center; }

footer .copyright span {
  color: rgba(255, 255, 255, 0.8); }

footer .copyright a {
  color: rgba(255, 255, 255, 0.8); }

/* ============================================================
	MEDIA QUERIES
============================================================ */
@media all and (max-width: 960px) {
  /* footer */
  footer aside {
    width: 100%;
    float: none;
    margin-bottom: 15px; }
  footer aside:last-child {
    margin-bottom: 0; }
  footer aside.logo {
    text-align: center; }
  footer ul {
    text-align: center; }
  footer ul li {
    display: inline-block; }
  footer ul li:after {
    content: "\2022"; }
  footer ul li:last-child:after {
    content: none; }
  footer ul li a {
    margin: 0 10px; } }

@media all and (max-width: 400px) {
  header .branding {
    padding: 15px 0; }
  header .branding .container {
    padding: 0 30px; }
  header .social {
    float: none;
    width: 100%;
    text-align: center;
    line-height: 30px;
    height: 30px; }
  header .social a i {
    margin: 0 5px; }
  header .logo {
    float: none;
    margin: 0 auto;
    margin-bottom: 15px; } }

.themeColor.light {
  position: relative;
  top: -165px;
  background-color: #eeeeee; }

.themeColor.dark {
  position: relative;
  top: -100px;
  background-color: #333333;
  color: #eeeeee; }

header .githubLinkback {
  position: absolute;
  display: table-column;
  left: 50%;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  font-size: 50px; }
