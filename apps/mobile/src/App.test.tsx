import { describe, it, expect } from '@jest/globals';
import { WELCOME_MESSAGE, PLATFORM_NAME, formatDate, formatTime } from '@learning/shared';

describe('Mobile App - Shared Package Integration', () => {
  it('can import shared package welcome message', () => {
    expect(WELCOME_MESSAGE).toBe('Welcome to Learning Platform!');
  });

  it('can import shared package platform name', () => {
    expect(PLATFORM_NAME).toBe('Learning Platform');
  });

  it('shared package exports are available and correct types', () => {
    expect(WELCOME_MESSAGE).toBeDefined();
    expect(typeof WELCOME_MESSAGE).toBe('string');
    expect(PLATFORM_NAME).toBeDefined();
    expect(typeof PLATFORM_NAME).toBe('string');
  });

  it('can use shared package utility functions', () => {
    const testDate = new Date('2024-01-15T10:30:00Z');

    const formattedDate = formatDate(testDate);
    const formattedTime = formatTime(testDate);

    expect(formattedDate).toBeDefined();
    expect(typeof formattedDate).toBe('string');
    expect(formattedTime).toBeDefined();
    expect(typeof formattedTime).toBe('string');
  });

  it('welcome message contains expected content', () => {
    expect(WELCOME_MESSAGE).toContain('Welcome to');
    expect(WELCOME_MESSAGE).toContain('Learning Platform');
  });
});
