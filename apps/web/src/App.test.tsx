// Simple test for web app - testing shared package integration
import { WELCOME_MESSAGE } from '@learning/shared';
import { describe, it, expect } from 'vitest';

describe('Web App Integration', () => {
  it('can import shared package', () => {
    expect(WELCOME_MESSAGE).toBe('Welcome to Learning Platform!');
  });

  it('shared package exports are available', () => {
    expect(WELCOME_MESSAGE).toBeDefined();
    expect(typeof WELCOME_MESSAGE).toBe('string');
  });

  it('welcome message has correct format', () => {
    expect(WELCOME_MESSAGE).toContain('Welcome to');
    expect(WELCOME_MESSAGE).toContain('Learning Platform');
  });
});
