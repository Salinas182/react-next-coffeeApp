import { AxiosInstance } from "axios";

interface MockedAxiosInstance extends AxiosInstance {
  create: jest.Mock;
  get: jest.Mock;
  post: jest.Mock;
}

const mockAxios: MockedAxiosInstance = jest.genMockFromModule(
  "axios"
) as MockedAxiosInstance;

const mockAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
};

mockAxios.create = jest.fn(() => mockAxiosInstance);

export default mockAxios;
