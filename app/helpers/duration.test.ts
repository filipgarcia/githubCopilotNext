
import { convertToMilliseconds } from './duration';

describe('convertToMilliseconds', () => {
  it('should convert seconds to milliseconds', () => {
    const result = convertToMilliseconds(10, 'seconds');
    expect(result).toBe(10000);
  });

  it('should convert minutes to milliseconds', () => {
    const result = convertToMilliseconds(5, 'minutes');
    expect(result).toBe(300000);
  });

  it('should convert hours to milliseconds', () => {
    const result = convertToMilliseconds(2, 'hours');
    expect(result).toBe(7200000);
  });

  it('should convert days to milliseconds', () => {
    const result = convertToMilliseconds(3, 'days');
    expect(result).toBe(259200000);
  });
});