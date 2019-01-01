import { createTestClient } from 'apollo-server-testing'
import { Prisma } from '../generated/prisma'
import { createServer } from '../'

jest.mock('../generated/prisma')

beforeEach(() => {
  // @ts-ignore jest improperly mocks Prisma
  Prisma.mockClear();
});


test('cannot fetch user', () => {
	const client = createTestClient(createServer())
	expect(Prisma).toHaveBeenCalledTimes(1)
	return client.query({query: "query users {id}"})
})
