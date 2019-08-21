import React, {Component} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

class Testimonial extends Component {

  /**
   * State has the data and the necessary page details for Pagination functionality.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      testimonials:[],
      perPage: 5,
      totalPage: 5,
      firstName: '',
      lastName: '',
      totalItemsCount: null

    };
  }

  componentDidMount(){
    
    //http://localhost:8080/testimonials/sort?limit=10&offset=0&sortby=T_Type
    this.httpRequestWithPagination(1);  
  }


  /**
   * The HTTP Call with Pagination is implemented inside this function. The response is stored
   * inside the constructor.
   * API URL: http://localhost:8080/testimonials/sort?limit=10&offset=0&sortby=T_Type
   * @param {*} pageNumber 
   */
  httpRequestWithPagination(pageNumber){
      const {perPage} = this.state;
    pageNumber--;
    Axios.post('http://localhost:8080/testimonials/sort?limit='+perPage+'&offset='+pageNumber+'&sortby=T_Type',{

    })
  .then((response) => {

    
    this.setState({
      testimonials:response.data.data,
      totalItemsCount:(response.data.data).length,
      totalPage:Math.ceil(response.data.totalRecords/this.state.perPage),
      totalItemsCount:response.data.totalRecords
    })

    console.log(this.state.testimonials);
    console.log(this.state.perPage);

    console.log(this.state.totalPage);
    
  })
  .catch(function (error) {
    console.log(error);
  })

  }

  /**
   * The render() is used to render the data to the view. All small logic is implemented here
   * to implement the Pagination buttons.
   */

  render(){
    let renderPageNumbers;
    const pageNumbers = [];
    if (this.state.totalItemsCount !== null) {
      for (let i = 1; i <= this.state.totalPage; i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        return (
          <span key={number} onClick={() => this.httpRequestWithPagination(number)}>{number}</span>
        );
      });
    }


    return (
      <div className="container">

          <div>
          <h3 className="testimonial-button">Testimonials</h3>
          <Link to="/todo" className="btn btn-primary testimonial-button1">Add Testimonial</Link>
          </div>
      
      <table>
        <tbody>
        <tr>
          <th>Itinerary Id</th>
          <th>Firstname</th>
          <th>Destination</th>
          <th>Region</th>
        </tr>
        {this.state.testimonials.map(testimonial=>(
          <tr key={testimonial.testimonialId}>
          
          <td>{testimonial.firstName}</td>
          <td>{testimonial.destination}</td>
          <td>{testimonial.region}</td>
          <td>{testimonial.star}</td>

        </tr>
        ))}   
        </tbody>
      </table>

      <div className="pagination">
        {renderPageNumbers}
      </div>   

      </div>
        );

  }

}

export default Testimonial;
