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
    Contenu: Attribute.Blocks;
  };
}

export interface ServicesServicesForServicesPage extends Schema.Component {
  collectionName: 'components_services_services_for_services_pages';
  info: {
    displayName: 'Services for services page';
  };
  attributes: {
    step: Attribute.String & Attribute.Required;
    stepDescription: Attribute.Text;
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

export interface ServicesStepsForServicesPage extends Schema.Component {
  collectionName: 'components_services_steps_for_services_pages';
  info: {
    displayName: 'Steps for services page';
  };
  attributes: {
    step: Attribute.String & Attribute.Required;
    stepDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'competences.competences': CompetencesCompetences;
      'realizations.test': RealizationsTest;
      'services.services-for-services-page': ServicesServicesForServicesPage;
      'services.services': ServicesServices;
      'services.steps-for-services-page': ServicesStepsForServicesPage;
    }
  }
}
