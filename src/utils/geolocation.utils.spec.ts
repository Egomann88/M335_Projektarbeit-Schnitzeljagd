import { haversineDistance } from './geolocation.utils';

describe('Haversine Distance', () => {
  it('should calculate correct distance between two points', () => {
    const coords1 = { latitude: 52.5200, longitude: 13.4050 };
    const coords2 = { latitude: 51.5074, longitude: -0.1278 };
    const expectedDistance = 943083.4238192325; // Calculated using a known haversine distance formula

    const distance = haversineDistance(coords1, coords2);

    expect(distance).toBeCloseTo(expectedDistance);
  });

  it('should calculate correct distance between two points', () => {
    const coords1 = { latitude: 52.5200, longitude: 13.4050 };
    const coords2 = { latitude: 52.5200, longitude: 13.4050 };
    const expectedDistance = 0;

    const distance = haversineDistance(coords1, coords2);

    expect(distance).toBeCloseTo(expectedDistance);
  });
});
