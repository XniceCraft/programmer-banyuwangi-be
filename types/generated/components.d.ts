import type { Schema, Struct } from '@strapi/strapi';

export interface FooterAdditionalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_footer_additional_navigations';
  info: {
    displayName: 'Additional Navigation';
  };
  attributes: {
    primary: Schema.Attribute.Component<'shared.navigation-with-icon', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    secondary: Schema.Attribute.Component<'shared.navigation', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface HomePageComponentEvent extends Struct.ComponentSchema {
  collectionName: 'components_home_page_component_events';
  info: {
    displayName: 'Event';
  };
  attributes: {
    description: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    speaker: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePageEventSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_event_sections';
  info: {
    displayName: 'Event Section';
  };
  attributes: {
    events: Schema.Attribute.Component<'home-page-component.event', true> &
      Schema.Attribute.Required;
  };
}

export interface HomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePageSubHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sub_hero_sections';
  info: {
    displayName: 'Sub Hero Section';
  };
  attributes: {
    documentations: Schema.Attribute.Relation<
      'oneToMany',
      'api::documentation.documentation'
    >;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigationGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_groups';
  info: {
    displayName: 'Navigation Group';
  };
  attributes: {
    navigations: Schema.Attribute.Component<'shared.navigation', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface SharedNavigationWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_with_icons';
  info: {
    displayName: 'Navigation With Icon';
  };
  attributes: {
    showIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.additional-navigation': FooterAdditionalNavigation;
      'home-page-component.event': HomePageComponentEvent;
      'home-page.event-section': HomePageEventSection;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.sub-hero-section': HomePageSubHeroSection;
      'shared.navigation': SharedNavigation;
      'shared.navigation-group': SharedNavigationGroup;
      'shared.navigation-with-icon': SharedNavigationWithIcon;
    }
  }
}
