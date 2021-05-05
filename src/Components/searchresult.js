import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
export default class searchresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      data: [],
      page:1,
      disp:"none",
    };
  }
  oninput = (e) => {
    this.setState({ keyword: e.target.value });
  };
  search = () => {
    if(this.state.keyword==""){
      alert("Please enter search keyword")
    }
    else{
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${this.state.keyword}&limit=8&page=${this.state.page}`)
      .then((res) => {
        this.state.data.push(res.data.results)
        this.setState({ temp:true,disp:"inline-block" });
      });
      {this.state.page>20 ?this.state.page=0 :this.state.page+=1}
    }  
    
  };
  render() {
    const { keyword, data,disp } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row mt-5 mx-0">
            <div className="col-md-12 text-white">
              <div class="search mb-3 mt-5 ">
                <input
                  type="text"
                  name="keyword"
                  value={keyword}
                  className="fs-1"
                  onChange={this.oninput}
                />
                <button
                  className=" btn-go fs-1 text-white"
                  type="button"
                  onClick={this.search}
                >
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 justify-content-center">
        {data.map((data1)=>(
            <>
          {data1.map((data2, i) => (
              <>
            <div class="col mt-5">
              <div class="card h-100">
                <img src={data2.image_url} class="card-img-top"   height="300px" />
                <div class="card-body">
                  <h5 class="card-title">{data2.title}</h5>
                  
                </div>
              </div>
            </div>
            </>
          ))}
          </>
          ))}
          </div>
          <div className="row justify-content-center my-5" style={{display:disp}} >
              <div className="col-md-12 mb-5">
                
                <button className="btn" onClick={this.search}><i class="fa fa-refresh loadmore" aria-hidden="true"></i>
</button></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
