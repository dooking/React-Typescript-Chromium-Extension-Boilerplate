# Chrominum Extension Boilerplate
> [Boostcamp 그룹프로젝트 사이드 프로젝트](https://github.com/boostcamp-2020/Project15-c-Client-Based-Formula-Editor)
### https://www.npmjs.com/package/react-typescript-chromium-extension-boilerplate

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

## Quote
- [리액트 타입스크립트 = 크롬 확장프로그램 만들기!](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8---%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-=-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0!)
- [Chrome Developer](https://developer.chrome.com/extensions)

## ⭐ Show your support
Please ⭐️ [this repository](https://github.com/boostcamp-2020/Project15-c-Client-Based-Formula-Editor) if this project helped you!
