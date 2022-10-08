import React, { useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  CaretRightFill,
} from "react-bootstrap-icons";

export const Manali = () => {

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowLeftCircleFill style={{color: "black", fontSize: "20px", }} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowRightCircleFill style={{color: "black", fontSize: "20px", }} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite:true,
    nextArrow:<SamplePrevArrow/>,
    prevArrow:<SampleNextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
        }
      }
    ]
  };

  const images = {
    image1:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Solang-Valley.jpg",
  image2:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Jogini-Waterfalls.jpg",
  image3:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/The-Manali-Gompa.jpg",
  image4:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Hampta-Pass.jpg",
  image5:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Museum-of-Himachal-Culture-and-Folk-Art.jpg",
  image6:
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Kothi1.jpg",
      text1:"",
      text2:"",
      text3:""
  }

  const [indate, setIndate] = useState("");
  const [outdate, setOutdate] = useState("");
  const [person, setPerson] = useState("");
  const [allDetails, setAllDetails] = useState([]);

  const [details, setDetails] = useState({
    check_in_date: "",
    check_out_date: "",
    numOfPerson: "",
    customerId: 2,
    cityCode: 101,
    packageCode: 101001,
  });

  const handleIndate = (event) => {
    details.check_in_date = event.target.value;
    setIndate(details.check_in_date);
    console.log(details.check_in_date);
  };
  const handleOutdate = (event) => {
    details.check_out_date = event.target.value;
    setOutdate(details.check_out_date);
    console.log(details.check_out_date);
  };
  const handlePerson = (event) => {
    details.numOfPerson = event.target.value;
    setPerson(details.numOfPerson);
    console.log(details.numOfPerson);
  };

  const getdayssss = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  };

  const [days, setDays] = useState();
  const [total, setTotal] = useState();
  const [success, setSuccess] = useState(false);

  function displayTotal() {
    const days = getdayssss(details.check_in_date, details.check_out_date);
    setDays(days);
    console.log(days);
  }
  function displayCost() {
    const total = days * details.numOfPerson * 3000;
    setTotal(total);
    console.log(total);
  }

  function createPost(event) {
    event.preventDefault();
    console.log(details);
    axios.post("http://localhost:9192/details", details);

    const newDetail = [...allDetails, details];
    setAllDetails(newDetail);
    setSuccess(true);
  }

  return (
    <div className="layout">
      <Card className="boxx sticky">
        <Card.Header className="head mx-2">
          {/* Image Slider */}
          <Slider {...settings}>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{images.text1}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{images.text2}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{images.text3}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image4}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{images.text4}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image5}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{images.text5}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={images.image6}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{images.text6}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Slider>
        </Card.Header>
        <Card.Body>
          <Card.Title className="display-4">MANALI</Card.Title>
          <Card.Text>
            <CaretRightFill /> Enjoy the sunset of Mount Abu and visit Nakki
            lake.
            <br />
            <CaretRightFill /> Dilwara temple - World famous for the stunning
            use of Marbles.
            <br />
            <CaretRightFill /> The historical Maharana Pratap Samarak at Moti
            magri.
            <br />
            <CaretRightFill /> Saheliyon Ki Bari – Garden of the Maids of
            Honour.
            <br />
            <CaretRightFill /> Get a glimpse of the glorious past of our country
            at the beautiful crystal gallery.
            <br />
            <CaretRightFill /> Vintage car museum considered to be the pride and
            treasure of rich Indian heritage & culture.
            <br />
            <CaretRightFill /> Boating in picturesque Lake Pichola.
            <br />
            <CaretRightFill /> Historic Chittorgadh fort - the most outstanding
            forts of the country and indeed 'Pride of Rajasthan State”.
            <br />
            <CaretRightFill /> Take a quick photostop at Hawa Mahal.
            <br />
            <CaretRightFill /> Jantar Mantar – an astronomical observatory built
            by Sawai Jai Singh.
            <br />
            <CaretRightFill /> Birla Mandir, Jaipur which is dedicated to the
            Hindu Goddess Lakshmi and Lord Vishnu.
          </Card.Text>
          <form onSubmit={createPost}>
            <div className="row">
              <div className="col-4">
                <label className="row d-flex justify-content-center align-items-center">
                  Check-In Date
                </label>
                <input
                  className="form-control row d-flex justify-content-center align-items-center"
                  type="date"
                  name="check_in_date"
                  onChange={handleIndate}
                  required
                />
              </div>
              <div className="col-4">
                <label className="row d-flex justify-content-center align-items-center">
                  Check-Out Date
                </label>
                <input
                  className="form-control row d-flex justify-content-center align-items-center"
                  type="date"
                  name="check_out_date"
                  onChange={handleOutdate}
                  required
                />
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center ">
                <input
                  type="button"
                  className=" btn btn-outline-dark "
                  value="Add dates"
                  onClick={displayTotal}
                  required
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center py-3 border border-2 my-3">
              <div className="col d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <label className="col">No. of Days</label>
                  <p value={days}>{days}</p>
                  <div className=" col row">
                    <label className="col">No. of Adults</label>
                    <input
                      className="col form-control"
                      type="number"
                      name="noOfPerson"
                      onChange={handlePerson}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col border">
                <div className="row">
                  <div className="col d-flex justify-content-end align-items-center">
                    <input
                      type="button"
                      className="btn btn-outline-dark"
                      value="calculate"
                      onClick={displayCost}
                      required
                    />
                    <label className="col d-flex justify-content-end align-items-center">
                      Total Payable Amount
                    </label>
                    <h3 className="col d-flex justify-content-end align-items-center">
                      {total}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col pt-3 d-flex justify-content-center align-items-center">
              <Button type="submit" className="col" variant="primary">
                BOOK NOW
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
      { success ? (
      <Card>
        <h1 className="text-center">Please note down your Booking details</h1>
        <table className="table table-striped" width="100%">
          <thead>
            <tr>
              <td>
                <label htmlFor="">CustomerId</label>
              </td>
              <td>
                <label htmlFor="">PackageCode</label>
              </td>
              <td>
                <label htmlFor="">Check_in_Date</label>
              </td>
              <td>
                <label htmlFor="">Check_out_Date</label>
              </td>
              <td>
                <label htmlFor="">No. of Person</label>
              </td>
              <td>
                <label htmlFor="">Cost</label>
              </td>
            </tr>
          </thead>
          <tbody>
            {allDetails.map((detail) => (
              <tr key={detail.customerId}>
                <td>{detail.customerId}</td>
                <td>{detail.cityCode}</td>
                <td>{detail.packageCode}</td>
                <td>{detail.check_in_date}</td>
                <td>{detail.check_out_date}</td>
                <td>{detail.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      ) : (<h3 className="text-light bg-dark text-">We are here to serve you well </h3>) }
    </div>
  );
}

