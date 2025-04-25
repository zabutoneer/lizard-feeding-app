import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  ChakraProvider,
  defaultSystem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FeedingModal } from '../feeding/FeedingModal';

const mockLizards = [
  {
    id: 1,
    name: 'レオン',
    type: 'ヒョウモントカゲモドキ',
    nextFeeding: '2025-04-16',
    image: '/mock_images/reo.png',
  },
  {
    id: 2,
    name: 'エニー',
    type: 'ヒョウモントカゲモドキ',
    nextFeeding: '2025-04-17',
    image: '/mock_images/eniguma.png',
  },
  {
    id: 3,
    name: 'のん',
    type: 'アオジタトカゲ',
    nextFeeding: '2025-04-18',
    image: '/mock_images/aojita.png',
  },
];

export function Lizards() {
  const [selectedLizard, setSelectedLizard] = useState<number | null>(null);

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={6}>
        <Heading mb={6}>トカゲ一覧</Heading>
        <SimpleGrid columns={[1, null, 2]}>
          {mockLizards.map((lizard) => (
            <Box
              key={lizard.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              bg="white"
              shadow="md"
              _dark={{ bg: 'gray.700' }}
            >
              <VStack>
                <Image
                  src={lizard.image}
                  alt={lizard.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Text fontSize="xl" fontWeight="bold">
                  {lizard.name}
                </Text>
                <Text color="gray.500">次回餌やり予定: {lizard.nextFeeding}</Text>
                <Button onClick={() => setSelectedLizard(lizard.id)}>餌をあげる</Button>
                <FeedingModal
                  isOpen={selectedLizard !== null}
                  onClose={() => setSelectedLizard(null)}
                  lizardName={mockLizards.find((l) => l.id === selectedLizard)?.name || ''}
                />
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}
