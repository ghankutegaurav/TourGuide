import React from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";

export const Packages = () => {
  const imageInfo = [
    {
      image1:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/1000x650-1.jpg",
      image2:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Bagore-Ki-Haveli.jpg",
      image3:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Mansapurna-Karni-Mata-Ropeway.jpg",
      image4: 
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/udaipur-City-palce.jpg",
      image5: 
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Fateh-Sagar-Lake.jpg",
      image6: 
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Monsoon-Palace.jpg",
      caption: "UDAIPUR",
      text:"Pack your bags and head out to Udaipur, the Venice of the East. It is indeed one of Rajasthan’s most spectacular cities and perhaps the best destination in India to marvel at the bygone-era palatial architecture.",
      title:"UDAIPUR",
      link:"/udaipur"
    },
    {
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
      caption: "Manali",
      text:"Manali, amidst the hilly slopes, is a paradise for mountain lovers with spell-binding views, charming streams, the fairy-tale-like fog surrounding little hidden cottages, and a lingering scent of pines and freshness. ",
      title:"MANALI",
      link:"/manali"
    },
    {
      image1:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Anjuna-Beach.jpg",
      image2:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Trek.jpg",
      image3:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/1000x650-211.jpg",
      image4:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/1000x650-218.jpg",
      image5:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/night-beach-goa.jpg",
      image6:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Bogmalo-Beach-For-Snorkeling.jpg",
      caption: "Goa",
      text:"Known for its long coastline, sun-kissed beaches, heritage sites and amazing nightlife, Goa is one of the most visited tourist destinations in India. When life gets mundane, then pack your bags and head to Goa.",
      title:"GOA",
      link:"/goa"
    },
    {
      image1:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Karla-Caves.jpg",
        image2:
          "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Tikona-Fort.jpg",
        image3:
          "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Pawna-Lake.jpg",
        image4:
          "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Lohagad-fort.jpg",
        image5:
          "https://www.fabhotels.com/blog/wp-content/uploads/2021/11/19.-Reverse-Waterfall.jpg",
        image6:
          "https://www.fabhotels.com/blog/wp-content/uploads/2021/11/14.-imagica-adlabs.jpg",
      caption: "Lonavala",
      text:"Lonavala is one of the most popular weekend getaways in Maharashtra. And if you haven’t been there yet, we’d assume it’s only because of the lack of opportunity as this is one place you would want to put on your travel list.",
      title:"LONAVALA",
      link:"/lonavala"
    },
    {
      image1:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Chokramudi-Peak.jpg",
      image2:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/kundala-lake.jpg",
      image3:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Lakkom-Waterfalls.jpg",
      image4:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Meesapulimala.jpg",
      image5:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/08/Idukki.jpg",
      image6:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Lockhart-Gap.jpg",
      caption: "Munnar",
      text:"Mesmerised by the beauty of Munnar, the British used it as a summer resort in South India. This beautiful hill station with craggy peaks and exotic lush foliage makes for an idyllic holiday destination for city-weary souls.",
      title:"MUNNAR",
      link:"/munnar"
    },
    {
      image1:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Golden-Temple.jpg",
      image2:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Wagah-Border.jpg",
      image3:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Maharaja-Ranjit-Singh-Museum.jpg",
      image4:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Ram-Tirath-Ashram.jpg",
      image5:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Tarn-Taran.jpg",
      image6:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Jallianwala-Bagh.jpg",
      caption: "Amritsar",
      text:"Amritsar, the lore and legends weave a mythical link between the place and the Hindu epic Ramayana. It is believed that Amritsar is the location of Maharishi Valmiki’s ashram where Sita gave birth to Lav and Kush.",
      title:"AMRITSAR",
      link:"/amritsar"
    },
  ];



  const renderCard = (slide, index) => {
    return (
      <div>
        <div className="boxx">
          <Card style={{maxWidth:'35rem', maxHeight: '34rem'}}>
          <Carousel style={{maxWidth:'30rem', maxHeight: '30rem'}} >
            <Carousel.Item>
              <img  className="d-block w-100 img-fluid" src={slide.image1} alt="First slide" />
              <Carousel.Caption>
                <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 img-fluid" src={slide.image2} alt="Second slide" />
              <Carousel.Caption>
              <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 img-fluid" src={slide.image3} alt="Third slide" />
              <Carousel.Caption>
              <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 img-fluid" src={slide.image4} alt="Third slide" />
              <Carousel.Caption>
              <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 img-fluid" src={slide.image5} alt="Third slide" />
              <Carousel.Caption>
              <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 img-fluid" src={slide.image6} alt="Third slide" />
              <Carousel.Caption>
              <b className="display-6">{slide.caption}</b>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            <Card.Body>
              <div className=""></div>
              <Card.Title>{slide.title}</Card.Title>
              <Card.Text>{slide.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button as={Link} to={slide.link} variant="primary">View Details</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  };

  return <div className="grid">{imageInfo.map(renderCard)}</div>;
};
