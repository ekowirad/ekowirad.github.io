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

  console.log("PROPS", props)
  return <>
    <div className="work-detail">
      <Slider {...settings}>
        <div className="slick-img">
          <img src={decor} alt="" />
        </div>
        <div className="slick-img">
          <img src={github} alt="" />
        </div>
      </Slider>
      <div className="content">
        <div className="section row">
          <Button disabled onClick={() => { window.open("https://www.w3schools.com") }} text="Demo"></Button>
          <Button text="Source Code"></Button>
        </div>
        <div className="section">
          <h1>Project title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa similique molestiae eum officiis odit asperiores nemo. Maxime omnis similique modi, magni ullam beatae maiores dolore cumque at illo suscipit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa similique molestiae eum officiis odit asperiores nemo. Maxime omnis similique modi, magni ullam beatae maiores dolore cumque at illo suscipit.</p>
        </div>
        <div className="section">
          <h3>Main task</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa similique molestiae eum officiis odit asperiores nemo.</p>
        </div>
        <div className="section row">
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
          <div className="tag-box">Kotlin</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
}

export const query = graphql`
  query workQuery($id: String) {
  worksJson(id: { eq: $id }) {
    title
    summary
    slug
  }
}
`

export default Work;
