function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import axios, * as others from "https://cdn.skypack.dev/axios@0.21.1";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";

// https://www.omdbapi.com/?apikey=756abb2f&i=tt4154664&plot=full

const { useState, useEffect } = React;

// Main component -------------------------------
const Main = props => {

  const getMovies = (term = 'war', page = 1) => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=756abb2f&s=${encodeURIComponent(term)}&plot=full&page=${page}`).
    then(response => {
      // console.log(response.data);
      setMovies(response.data.Search);
      setTotal(Math.ceil(response.data.totalResults / 10));
      setPages(page);
      setLoading(false);
    }).catch(error => {
      // console.log(error);
      setMovies([]);
      setLoading(false);
    });
  };

  const getMovie = movieId => {
    axios.get(`https://www.omdbapi.com/?apikey=756abb2f&i=${movieId}&plot=full`).
    then(response => {
      // console.log(response.data);
      setMovie(response.data);
      setShowPop(true);
    });
  };

  const [loading, setLoading] = useState(true);
  const [showPop, setShowPop] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [keyword, setKeyword] = useState('frozen');
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState();
  useEffect(() => {
    getMovies();
  }, []);

  const handlePageClick = e => {
    console.log(e.selected);
    getMovies(keyword, e.selected + 1);
  };

  const handleCardClicked = movieId => {
    // console.log(movieId);
    getMovie(movieId);

  };

  const genCards = () => {
    let allCards = [];
    if (movies) {
      movies.map(movie => {
        allCards.push( /*#__PURE__*/React.createElement(Card, _extends({}, movie, { cardClicked: handleCardClicked })));
      });
    }
    return allCards;
  };

  let allCards = genCards();

  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement("h1", { className: "head" }, "Movieflix"), /*#__PURE__*/
    React.createElement(Search, {
      getInputValue: val => setKeyword(val),
      sendEnter: () => getMovies(keyword),
      getSubmit: () => getMovies(keyword) }),

    showPop ? /*#__PURE__*/React.createElement(Showexpand, _extends({}, movie, { closePop: () => setShowPop(false) })) : null, /*#__PURE__*/

    React.createElement("div", { className: "cards" },
    loading ? /*#__PURE__*/React.createElement(Loader, null) :
    allCards.length === 0 ? /*#__PURE__*/
    React.createElement("div", { className: "error" }, "No movie found...", /*#__PURE__*/

    React.createElement("i", { class: "far fa-grin-beam-sweat" })) :
    allCards), /*#__PURE__*/


    React.createElement("div", { className: "paginate" }, /*#__PURE__*/
    React.createElement(ReactPaginate, {
      previousLabel: "Back",
      nextLabel: "Next",
      breakLabel: "...",
      breakClassName: "break-me",
      pageCount: total,
      marginPagesDisplayed: 1,
      pageRangeDisplayed: 4,
      onPageChange: handlePageClick,
      containerClassName: "pagination",
      subContainerClassName: "pages pagination",
      activeClassName: "active" }))));






};



// Loader component -------------------------------
const Loader = props => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "loader" }, "Loading...", /*#__PURE__*/

    React.createElement("i", { class: "fas fa-sync-alt fa-spin" })));


};


// Search component -------------------------
const Search = props => {

  let sendValue = e => {
    props.getInputValue(e.target.value);
  };

  const handleSubmit = () => {
    props.getSubmit();
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      props.sendEnter();
      // console.log('Enter');
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "search" }, /*#__PURE__*/
    React.createElement("div", { className: "search-box" }, /*#__PURE__*/
    React.createElement("input", { type: "text",
      onChange: sendValue,
      onKeyDown: handleKeyDown,
      placeholder: "Find movie..." }), /*#__PURE__*/
    React.createElement("button", { onClick: handleSubmit }, /*#__PURE__*/React.createElement("i", { class: "fas fa-search" })))));



};


// Card component ------------------------------------------------
const Card = props => {

  // console.log(props);
  const handleClick = e => {
    // console.log(e.target.dataset.id);
    props.cardClicked(e.target.dataset.id);
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "card", title: props.Title, "data-id": props.imdbID, onClick: handleClick }, /*#__PURE__*/
    React.createElement("img", { src: props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image', alt: props.Title, "data-id": props.imdbID })));


};



// Show expand component ---------------------------------------
const Showexpand = props => {

  console.log(props);

  return /*#__PURE__*/(
    React.createElement("div", { className: "show-expand" }, /*#__PURE__*/

    React.createElement("div", { className: "show-content" }, /*#__PURE__*/
    React.createElement("i", { class: "show-close fas fa-times", onClick: props.closePop }), /*#__PURE__*/

    React.createElement("div", { className: "show-poster" }, /*#__PURE__*/
    React.createElement("span", { className: "show-poster-bg" }, /*#__PURE__*/
    React.createElement("img", { src: props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image', alt: props.Title })), /*#__PURE__*/

    React.createElement("span", { className: "show-poster-main" }, /*#__PURE__*/
    React.createElement("img", { src: props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image', alt: props.Title }))), /*#__PURE__*/



    React.createElement("div", { className: "show-detail" }, /*#__PURE__*/
    React.createElement("h2", null, props.Title), /*#__PURE__*/
    React.createElement("ul", { className: "show-tags" }, /*#__PURE__*/
    React.createElement("li", { className: "show-rated" }, props.Country), /*#__PURE__*/
    React.createElement("li", { className: "show-rated" }, props.Year), /*#__PURE__*/
    React.createElement("li", { className: "show-year" }, props.Rated), /*#__PURE__*/
    React.createElement("li", { className: "show-year" }, props.Genre)), /*#__PURE__*/

    React.createElement("div", { class: "show-plot" }, /*#__PURE__*/
    React.createElement("p", null, props.Plot)), /*#__PURE__*/


    React.createElement("div", { class: "show-credits" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Production:"), " ", props.Production), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Runtime:"), " ", props.Runtime || 'N/A '), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Rating:"), " ", props.imdbRating), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Director:"), " ", props.Director), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Actors:"), " ", props.Actors), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "BoxOffice:"), " ", props.BoxOffice || 'N/A '))))));






};

ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('app'));