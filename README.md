### 소개
- `React`를 이용한 `NetFlix` 클론 페이지입니다. [[넷플릭스 페이지 이동]](https://WooJinDeve.github.io/react-netfilx-app/)

### Settings
- **Movie DB API**
  - [영화 API KEY 사이트](https://www.themoviedb.org/?language=ko) 
  - [영화 API 명세](https://developers.themoviedb.org/3)

- **download package**
  - `npm install -d axios`
  - `npn install -d react-dom`
  - `npm install -d react-router-dom`
  - `npm install -d styled-components`
  - `npm install -d swiper`
  - `npm install -d web-vitals`


<details>
<summary><h3>File Structure</h3></summary>

```
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
    │  App.css
    │  App.js
    │  App.test.js
    │  index.css
    │  index.js
    │  logo.svg
    │  reportWebVitals.js
    │  setupTests.js
    │
    ├─api
    │      axios.js
    │      requests.js
    │
    ├─component
    │  │  Banner.css
    │  │  Banner.js
    │  │  Footer.js
    │  │  Nav.css
    │  │  Nav.js
    │  │  Row.css
    │  │  Row.js
    │  │
    │  └─MovieModal
    │          index.js
    │          MovieModal.css
    │
    ├─hooks
    │      useDebounce.js
    │      useOnClickOutside.js
    │
    └─pages
        ├─DetailPage
        │      index.js
        │
        ├─MainPage
        │      index.js
        │
        └─SearchPage
                index.js
                SearchPage.css
```

</details>

### **inflearn 강의**
- **[Inflearn] - `John Ahn`님의** [따라하며 배우는 리액트 A-Z](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8)
