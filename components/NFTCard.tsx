import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import {
  Web3Button,
  useContract,
  useAddress,
  useNFT,
} from "@thirdweb-dev/react";
import { NFT_ADDRESS } from "../constants/addresses";

export default function NFTCard({ tokenId }: { tokenId: string }) {
  const address = useAddress();
  const { contract } = useContract(NFT_ADDRESS);
  const { data } = useNFT(contract, tokenId);

  return (
    <Box borderRadius={"xl"} p={8} maxW={"445px"} w={"full"} bg={"white"}>
      <Image
        borderRadius={"xl"}
        src={`ulr(${data?.metadata.image})`}
        alt="NFT"
      />
      <Heading fontSize={"xl"}>{data?.metadata.name}</Heading>
      {!address ? (
        <Text>Sign in to claim the pass</Text>
      ) : (
        <Web3Button
          contractAddress={NFT_ADDRESS}
          action={(contract) => contract.erc1155.claim(tokenId, 0)}
        >
          Claim Pass
        </Web3Button>
      )}
    </Box>
  );
}
