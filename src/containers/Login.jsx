import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Nav from '../components/navbar';
import BlogPostWithImage from '../components/blogCard';

export default function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  }
  return (
    <>

      <Box width="1200px" margin="20px auto" >

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            email: Yup.string().email().required('Required'),
            password: Yup.string().required('Required'),
          })}
        >{({ handleSubmit, errors, touched }) => {

          console.log("errors=====>", errors);
          return (

            <Form>
              <Stack direction={{ base: 'column', md: 'row' }} >
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="email" isInvalid={errors.email && touched.email}>
                      <FormLabel>Email address</FormLabel>
                      <Field as={Input}
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        isInvalid={errors.email && touched.email} />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={errors.password && touched.password}>
                      <FormLabel>Password</FormLabel>
                      <Field as={Input}
                        type="password"
                        name="password"
                        placeholder="Enter password" />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Stack spacing={6}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.500'}>Forgot password?</Link>
                      </Stack>
                      <Button colorScheme={'blue'} variant={'solid'} type='submit'>
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Flex>
                <Flex flex={1} alignItems="center">
                  <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    height="600px"
                    src={
                      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                  />
                </Flex>
              </Stack>
            </Form>
          )
        }}

        </Formik>
      </Box >
    </>
  );
}