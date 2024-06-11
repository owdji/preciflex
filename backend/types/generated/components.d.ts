import type { Schema, Attribute } from '@strapi/strapi';

export interface RealizationsTest extends Schema.Component {
  collectionName: 'components_realizations_tests';
  info: {
    displayName: 'test';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'realizations.test': RealizationsTest;
    }
  }
}
