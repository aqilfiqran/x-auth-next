/* eslint-disable @typescript-eslint/no-unused-vars */
import { getGeneralApiProblem } from './apiProblem';

describe('apiProblem utilities', () => {
  describe('getGeneralApiProblem', () => {
    it('should return null for non-error statuses', () => {
      expect(getGeneralApiProblem('OK', 200)).toBeNull();
    });

    it("should return 'server' for 500 status", () => {
      expect(getGeneralApiProblem('SERVER_ERROR', 500)).toEqual({ kind: 'server' });
    });

    it("should return 'unauthorized' for 401 status", () => {
      expect(getGeneralApiProblem('CLIENT_ERROR', 401)).toEqual({ kind: 'unauthorized' });
    });

    it("should return 'forbidden' for 403 status", () => {
      expect(getGeneralApiProblem('CLIENT_ERROR', 403)).toEqual({ kind: 'forbidden' });
    });

    it("should return 'not-found' for 404 status", () => {
      expect(getGeneralApiProblem('CLIENT_ERROR', 404)).toEqual({ kind: 'not-found' });
    });

    it("should return 'rejected' for other 4xx errors", () => {
      expect(getGeneralApiProblem('CLIENT_ERROR', 400)).toEqual({ kind: 'rejected' });
    });

    it("should return 'unknown' for unexpected status", () => {
      expect(getGeneralApiProblem('UNKNOWN_ERROR', 418)).toEqual({
        kind: 'unknown',
        temporary: true,
      });
    });
  });
});
