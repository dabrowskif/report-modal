const mockResponse = {
  data: {},
  status: 200,
};

export default {
  post: jest.fn().mockResolvedValue(mockResponse),
};
