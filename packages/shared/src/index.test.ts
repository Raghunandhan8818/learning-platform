import { describe, it, expect } from 'vitest';

import { PLATFORM_NAME, WELCOME_MESSAGE, formatDate, formatTime } from './index';

describe('Shared Package', () => {
  it('exports correct platform name', () => {
    expect(PLATFORM_NAME).toBe('Learning Platform');
  });

  it('exports correct welcome message', () => {
    expect(WELCOME_MESSAGE).toBe('Welcome to Learning Platform!');
  });

  it('formats date correctly', () => {
    const testDate = new Date('2024-01-15T10:30:00Z');
    const formatted = formatDate(testDate);
    expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('formats time correctly', () => {
    const testDate = new Date('2024-01-15T10:30:00Z');
    const formatted = formatTime(testDate);
    expect(formatted).toMatch(/\d{1,2}:\d{2}:\d{2}/);
  });
});
