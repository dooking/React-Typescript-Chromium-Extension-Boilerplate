# react-typescript-chromium-extension-boilerplate
> [boostcamp 사이드 프로젝트 Chrominum Extension Boilerplate 생성](https://github.com/boostcamp-2020/Project15-c-Client-Based-Formula-Editor)

## Features
- React + Typescript + Chromium-extension 개발 환경 셋팅
- CRA없이 React 설치
- Webpack, Babel, Eslint 설정 가능

## Install

```tsx
git clone https://github.com/dooking/react-typescript-chromium-extension-boilerplate.git
npm install
```

## Structure
  ```
  📁 react-typescript-chromium-extension-boilerplate  
  ├── 📁 public
  |── ├── background.js         // Browser event handler
  |── ├── index.html            // Root html
  |── ├── index.css             // Root css
  |── ├── mainfest.json         // Extension 설정 파일
  |── ├── options.html          // Option Component
  │   └── options.js            // Option Script
  └── 📁 src
      ├── App.tsx               // Component
      └── index.tsx             // Webpack의 entry point
  ```

## How to use
### 1. ```npm run build```
### 2. chrome://extensions 사이트 접속 후, 1번에서 개발자 모드 ON, 2번에서 dist 폴더 업로드
![image](https://user-images.githubusercontent.com/60457112/100499539-d0603000-31ad-11eb-9967-5bb1ce11854b.png)

