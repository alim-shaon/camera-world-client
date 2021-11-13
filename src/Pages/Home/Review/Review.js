import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";

const Review = () => {
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    fetch("https://rocky-plateau-46145.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      {!reviews.length ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden"> Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <div className="d-flex align align-items-center my-4 pt-4">
            <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
            <h1>What Our Customer Says About Us</h1>
            <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
          </div>
          <Row>
            {reviews?.map((review) => (
              <Col key={review._id} className="my-4 ">
                <Card className="rounded h-100 shadow">
                  <Card.Title className="my-3">{review.user}</Card.Title>
                  <h3 className="py-1">{review.productName}</h3>
                  <Card.Text className=" h-50">{review.description}</Card.Text>
                  <Card.Footer className="d-flex bg-white justify-content-around align-items-center">
                    <RatingView
                      className="pt-3"
                      ratingValue={review.rating} /* RatingView Props */
                    />
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Review;
