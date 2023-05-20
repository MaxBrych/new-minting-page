import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, SimpleGrid } from "@chakra-ui/react";
import NFTCard from "../components/NFTCard";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={3} spacing={10}>
        <NFTCard tokenId="0" />
      </SimpleGrid>
    </Container>
  );
};

export default Home;
