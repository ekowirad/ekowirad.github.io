import React from "react";
import { graphql } from "gatsby"
import Slider from "react-slick";
import github from '../../images/socials/github.png'
import decor from '../../images/img-decor.jpg'
import Button from "../../components/button";
import Footer from "../../components/footer";

function Work(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = props.data.worksJson


  console.log("PROPS", data)
  return <>
    <div className="work-detail">
      <Slider {...settings}>
        {
          data.images.map((img, idx) => {
            return <div className="slick-img" key={idx}>
              <img onDoubleClick={() => { window.open(img) }} src={img} alt="" />
            </div>
          })
        }
      </Slider>
      <div className="content">
        <div className="section row">
          <Button disabled={data.demo == ''} onClick={() => { window.open(data.demo) }} text="Live"></Button>
          <Button disabled={data.source == ''} onClick={() => { window.open(data.source) }} text="Source Code"></Button>
        </div>
        <div className="section">
          <h1>{data.title}</h1>
          <p>{data.summary}</p>
        </div>
        <div className="section">
          <h3>Main task</h3>
          <p>{data.tasks}</p>
        </div>
        <div className="section row">
          {
            data.stacks.map((item, idx) => {
              return <div key={idx} className="tag-box">{item}</div>
            })
          }
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
}

export const query = graphql`
  query workQuery($id: String) {
  worksJson(id: { eq: $id }) {
    id
    source
    slug
    demo
    stacks
    summary
    tasks
    title
    type
    images
  }
}
`

export default Work;
