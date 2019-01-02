import { createTestClient } from 'apollo-server-testing'
import { Prisma } from '../generated/prisma'
import { createServer } from '../'

jest.mock('../generated/prisma')

beforeEach(() => {
  // @ts-ignore jest improperly mocks Prisma
  Prisma.mockClear();
});


test('calls prisma', () => {
  createTestClient(createServer())
  expect(Prisma).toHaveBeenCalledTimes(1)
})

test('cannot fetch user', async () => {
  // @ts-ignore jest improperly mocks Prisma
  Prisma.mockImplementation(() => {
    return {
      query: {
        users: () => [{
          id: 1,
          firstName: "Bob",
          lastName: "Smith",
        }]
      },
    }
  });

  const client = createTestClient(createServer())

  const resp = await client.query({
    query: `
      query {
        users {
          id
          firstName
          lastName
        }
      }
    `
  })
  expect(resp.errors).toBeFalsy()

  const resp2 = await client.query({
    query: `
      query {
        users {
          id
          firstName
          lastName
          hash
        }
      }
    `
  })
  expect(resp2.errors).toBeTruthy()
})
  
