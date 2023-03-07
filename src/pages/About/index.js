import React, { useEffect, useState } from "react";
import {
  Box,
  Box2,
  Container,
  Images,
  Name,
  SectionAbout,
} from "./About.style";
import axios from "axios";

const About = () => {
  const [Tokens, setTokens] = useState([]);
  const token = {
    method: "GET",
    url: "https://pro-api.solscan.io/v1.0/nft/collection/list_nft/557622cfbb071fcee539daa31c6d13577b4eba554d04180bdaf59521e690f730?page=1",
    headers: {
      accept: "application/json",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2NzgxOTgyNDE4NjUsImVtYWlsIjoiaXJmYWFuc2hvb2RpcTE5NTRAZ21haWwuY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiaWF0IjoxNjc4MTk4MjQxfQ.fvhXWFocj_t_iZi3OuTa8DYiVYNprS6JHwWKxNlw-G4",
    },
  };

  useEffect(() => {
    axios
      .request(token)
      .then(function (response) {
        setTokens(response.data.data.list_nfts);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <SectionAbout>
      <Container>
        {Tokens != 0 &&
          Tokens.map((token, id) => (
            <Box2 key={id}>
              <Images src={token.nft_image} alt="NFT"></Images>
              <Name>
                <div> {token.nft_name} </div>
                <div>
                  {" "}
                  {token?.nft_address.substring(0, 5)}...
                  {token?.nft_address.substring(token?.nft_address.length - 5)}
                </div>
              </Name>
            </Box2>
          ))}
      </Container>
    </SectionAbout>
  );
};

export default About;
