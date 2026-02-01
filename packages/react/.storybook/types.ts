/**
 * Minimal structural shape Storybook passes to storySort.
 * Storybook does not export this as a public type.
 */
export type StoryRef = Readonly<{
    title: string;
    name: string;
  }>;
  
  /**
   * Story ordering configuration
   */
  export type OrderItem = string | RegExp | [string | RegExp, OrderItem[]];
  export type Order = OrderItem[];
  
  /**
   * Storybook viewport definition
   */
  export type StorybookViewport = {
    name: string;
    styles: {
      width: string;
      height: string;
    };
  };  