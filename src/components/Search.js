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
        <div style={{ margin: "0rem auto" }}>
          {/* <form onSubmit={this.handleSubmit}>
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
          </form> */}
          <div className="container">
            {queryResults.map(item => {
              return (
                <div className="box" key={`row_${item.id}`}>
                  <div className="avatar">
                    <img src={item.image} alt="avatar" width="100" />
                  </div>
                  <div className="name">
                    <p>
                      <Link to={`/agent/${item.slug}`}>{item.name}</Link>
                    </p>
                    <p>View Website</p>
                    <p>{item.phone}</p>
                    <p>{item.email}</p>
                  </div>
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
  .container {
    width: 80vw;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  /* Agent Box */
  .box {
    display: flex;
    flex-basis: 50%;
    margin-bottom: 1.5rem;
    p {
      margin-bottom: 0rem;
    }
  }
  .avatar {
    width: 25%;
  }
  .name {
    width: 65%;
    padding: 10px;
    background-color: var(--mainColor);
    color: white;
    a {
      color: white;
      font-weight: bolder;
    }
    p {
      line-height: 1rem;
    }
  }
  /* Mobile */
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
  }
`

export default Search
