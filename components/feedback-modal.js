import { ChatIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoSend } from 'react-icons/io5'

export const FeedbackModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    let data = {
      name,
      email,
      id,
      message
    }
    setSending(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        setName('')
        setEmail('')
        setMessage('')
      }
      onClose()
      setSending(false)
      toast({
        title: 'Feedback Sent',
        description: 'Thank you 3000 for your valuable feedback 😃',
        status: 'success',
        position: 'top-right',
        duration: 7000,
        isClosable: true
      })
    })
  }
  return (
    <>
      <Button
        leftIcon={<ChatIcon />}
        onClick={onOpen}
        variant="ghost"
        colorScheme="teal"
      >
        Feedback
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={useColorModeValue('#c8cdd5', '#282c34')}>
          <ModalHeader>Send in your vital Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter your name"
                id="name"
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                placeholder="Enter your email"
                id="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="text">Message</FormLabel>
              <Textarea
                placeholder="Enter your message"
                id="message"
                type="textarea"
                onChange={e => setMessage(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              leftIcon={<IoSend />}
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              {sending ? (
                <>
                  Sending <Spinner size="xs" ml={3} />
                </>
              ) : (
                'Send'
              )}
            </Button>
            <Button onClick={onClose} leftIcon={<DeleteIcon />}>
              Discard
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
