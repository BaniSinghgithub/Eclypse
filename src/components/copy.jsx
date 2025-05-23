
export const InfoSections = styled.section`
  padding: 0px 40px;
  margin: 100px 0;

  details {
    text-align: center;
    cursor: pointer;
    font-size: 1.8vw;
    border-bottom: #999 solid 2px;

    summary::-webkit-details-marker {
      display: none;
    }

    summary {
      height: 200px;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 3.5vw;
      }

      img {
        height: 80px;
        width: 80px;
        filter: invert(1);
        transform: rotate(180deg);
      }
    }
  }
`;

export const Testimonials = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;
  padding-bottom: 100px;
  background-color: black;
  border-bottom: #857f7f solid 2px;
  text-align: center;

  sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      cursor: pointer;
      width: 6vw;
      height: 6vw;
      border-radius: 50%;
      opacity: 0.5;
    }
    .curr-img {
      opacity: 1;
      transform: scale(1.3);
      transition: transform 0.5s ease-in-out;
    }
  }

  blockquote {
    font-style: italic;
    margin-top: 10px;
    font-weight: bold;

    p {
      font-size: 2.4vw;
      width: 70%;
      text-align: left;
      margin-bottom: 80px;
    }
    strong,
    span {
      display: block;
      font-size: 1.2vw;
      text-align: left;
      margin-bottom: 20px;
      color: #999;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  height: 400px;

  .footer-brand {
    display: flex;
    font-size: 2.2vw;
    justify-content: space-between;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
    }
    .small-arrow {
      width: 30px;
      height: 30px;
    }
  }

  .combo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 50px;

    .footer-nav {
      height: 100%;
      display: flex;
      flex-direction: row;

      .linkNav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        padding-right: 20px;
        font-size: 1.4vw;

        span {
          height: 10%;

          a {
            text-decoration: none;
            display: inline;
            color: white;
          }
          a:hover {
            display: inline;
            text-decoration: underline;
          }
        }
      }
      .footer-contact {
        display: flex;
        flex-direction: column;

        p {
          margin-bottom: 10px;
          font-size: 1.2vw;
          color: white;
        }
        .contact-tag {
          margin-bottom: 0px;
          color: #999;
          font-size: 1.8vw;
        }
      }
    }

    .footer-eclypse {
      height: 100%;
      display: flex;
      align-items: end;
    }
  }
`;

export const H4 = styled.h4`
  font-size: 1.4vw;
  padding: 0 40px;
  margin-bottom: 40px;
  color: rgb(196, 187, 187);
`; 
