import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import styled from "styled-components"
import { Link } from "gatsby"

class Search extends Component {
  state = {
    agentList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("https://ekm383.github.io/fbihi/agents.json")
      .then(result => {
        const agentData = result.data
        this.setState({ agentList: agentData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { agentList } = this.state
    const dataToSearch = new JsSearch.Search("id")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")

    dataToSearch.addIndex("image") // sets the index attribute for the data
    dataToSearch.addIndex("name") // sets the index attribute for the data
    dataToSearch.addIndex("phone") // sets the index attribute for the data
    dataToSearch.addIndex("email") // sets the index attribute for the data

    dataToSearch.addDocuments(agentList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { agentList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? agentList : searchResults
    return (
      <SearchWrapper>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="searchContainer cursor">
              <input
                type="text"
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                className="rq-form-element"
              />
              <i></i>
              <p>Search: {queryResults.length} Agents</p>
            </div>
          </form>
          <div className="container">
            {queryResults.map(item => {
              return (
                <div className="box" key={`row_${item.id}`}>
                  <img
                    className="avatar"
                    src={item.image}
                    alt="avatar"
                    width="100"
                  />
                  <p className="name">
                    <Link to={`/agent/${item.slug}`}>{item.name}</Link>
                  </p>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                </div>
              )
            })}
          </div>
        </div>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  width: 80vw;
  .searchContainer {
    width: 80%;
    margin: -5rem auto 2rem auto;
    position: relative;
    z-index: 9999;
    p {
      font-size: 0.7rem;
      text-align: center;
      margin-top: 0.3rem;
    }
  }
  #Search {
    width: 100%;
    font-size: 1.1rem;
    padding: 1rem 0rem;
    text-align: center;
    border: 1px solid white;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    &:focus {
      outline: none;
      border-color: var(--mainColor);
    }
  }
  a {
    color: var(--darkGray);
    transition: 200ms ease-in;
    text-transform: capitalize;
    &:hover {
      color: var(--mainColor);
      padding-left: 0.1rem;
    }
  }
  /* Blinking Cursor Style */
  .cursor {
    position: relative;
  }
  .cursor i {
    position: absolute;
    width: 1px;
    height: 1.4rem;
    background-color: #000000;
    left: 50%;
    top: 20%;
    animation-name: blink;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    opacity: 1;
  }
  .cursor input:focus + i {
    display: none;
  }
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  /* Agent Box */
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .avatar {
    border-radius: 50%;
  }
  .box {
    flex-basis: 25%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .name a {
    font-weight: bold;
    color: var(--mainColor);
  }
  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    .box {
      flex-basis: 50%;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`

export default Search
