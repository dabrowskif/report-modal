const mockResponse = {
  status: 200,
};

export default {
  post: jest.fn().mockResolvedValue(mockResponse),
};
