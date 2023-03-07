import React, { useEffect, useState } from "react";
import {
  Container,
  Images,
  SectionAbout,
  TokenAddress,
  TokenCard,
  TokenInfo,
  TokenName,
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
        console.log(response.data.data.list_nfts);
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
            <TokenCard key={id}>
              <Images src={token.nft_image} alt="NFT"></Images>
              <TokenInfo>
                <TokenName> OWNER : </TokenName> <br />
                <TokenAddress>
                  {token?.nft_address.substring(0, 4)}...
                  {token?.nft_address.substring(token?.nft_address.length - 4)}
                </TokenAddress>
              </TokenInfo>
            </TokenCard>
          ))}
      </Container>
    </SectionAbout>
  );
};

export default About;
