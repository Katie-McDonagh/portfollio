import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import Headlines from './githubInfo'
import mockResponse from './__mocks__/github-info.json'
// mock fetch and return the mock response json
jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test("shows name", async () => {
  render(<Headlines />)

  const element = await waitForElement(() => screen.getByText("Katie McDonagh"))
  expect(element).toBeInTheDocument()
})