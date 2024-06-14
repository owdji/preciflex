import type { Schema, Attribute } from '@strapi/strapi';

export interface CompetencesCompetences extends Schema.Component {
  collectionName: 'components_competences_competences';
  info: {
    displayName: 'competences';
    description: '';
  };
  attributes: {
    competenceTitle: Attribute.String & Attribute.Required;
    competenceDescription: Attribute.Text & Attribute.Required;
    competenceImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

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

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    serviceTitle: Attribute.String & Attribute.Required;
    serviceDescription: Attribute.Text & Attribute.Required;
    serviceIcon: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'competences.competences': CompetencesCompetences;
      'realizations.test': RealizationsTest;
      'services.services': ServicesServices;
    }
  }
}
