import '@testing-library/jest-dom/vitest'

// Headless UI relies on ResizeObserver; JSDOM doesn't provide it by default.
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error - test environment shim
globalThis.ResizeObserver = globalThis.ResizeObserver ?? ResizeObserverMock;

